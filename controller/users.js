const User = require("../models/User");
const MyError = require("../utils/myError");
const asyncHandler = require("express-async-handler");
const paginate = require("../utils/paginate");

//register
exports.register = asyncHandler(async (req, res, next) => {
  // create функц бол статик функц
  const user = await User.create(req.body);
  // үүсгэгдсэн нэгж обьектоос дуудагдаж буй функц нь метод функц юм.
  const jwt = user.getJsonWebToken();
  console.log("ирсэн token: ", jwt);
  res.status(200).json({
    success: true,
    jwt,
    user: user,
  });
});
// логин хийнэ
exports.login = asyncHandler(async (req, res, next) => {
  const { email, password } = req.body;
  // оролтыгоо шалгана
  if (!email || !password) {
    throw new MyError("Имейл болон нууц үгээ оруулна уу", 400);
  }
  // тухайн хэрэглэгчийг хайна
  // User model дээр password - ийг өгөхгүй / select: false /  гэж тохируулсан бөгөөд энэ удаад password - ийг өгнө шүү хэмээн   .select("+password") - методыг бичиж өгсөн байна
  const user = await User.findOne({ email }).select("+password");
  if (!user) {
    throw new MyError("Имейл болон нууц үгээ зөв оруулна уу", 401);
  }
  const ok = await user.checkPassword(password);
  if (!ok) {
    throw new MyError("Имейл болон нууц үгээ зөв оруулна уу", 401);
  }

  res.status(200).json({
    success: true,
    login: true,
    token: user.getJsonWebToken(),
    user: user,
  });
});
