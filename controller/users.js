const User = require("../models/User");
const MyError = require("../utils/myError");
const asyncHandler = require("express-async-handler");
const paginate = require("../utils/paginate");

//register
exports.register = asyncHandler(async (req, res, next) => {
  // create функц бол статик функц
  const user = await User.create(req.body);
  // үүсгэгдсэн нэгж обьектоос дуудагдаж буй функц нь метод функц юм.
  const token = user.getJsonWebToken();
  console.log("ирсэн token: ", token);
  res.status(200).json({
    success: true,
    token,
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
    token: user.getJsonWebToken(),
    user: user,
  });
});

exports.getUsers = asyncHandler(async (req, res, next) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 100;
  const sort = req.query.sort;
  const select = req.query.select;

  ["select", "sort", "page", "limit"].forEach((el) => delete req.query[el]);

  // Pagination
  const pagination = await paginate(page, limit, User);
  //console.log(req.query, sort, select);
  const users = await User.find(req.query, select)
    .sort(sort)
    .skip(pagination.start - 1)
    .limit(limit);
  res.status(200).json({
    success: true,
    data: users,
    pagination,
  });
});

exports.getUser = asyncHandler(async (req, res, next) => {
  const user = await User.findById(req.params.id);

  if (!user) {
    throw new MyError(req.params.id + " ID-тэй хэрэглэгч байхгүй!", 400);
  }

  res.status(200).json({
    success: true,
    data: user,
  });
});

exports.createUser = asyncHandler(async (req, res, next) => {
  const user = await User.create(req.body);

  res.status(200).json({
    success: true,
    data: user,
  });
});

exports.updateUser = asyncHandler(async (req, res, next) => {
  const user = await User.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  if (!user) {
    throw new MyError(req.params.id + " ID-тэй хэрэглэгч байхгүй.", 400);
  }

  res.status(200).json({
    success: true,
    data: user,
  });
});

exports.deleteUser = asyncHandler(async (req, res, next) => {
  const user = await User.findById(req.params.id);

  if (!user) {
    throw new MyError(req.params.id + " ID-тэй хэрэглэгч байхгүй.", 400);
  }

  user.remove();

  res.status(200).json({
    success: true,
    data: user,
  });
});
