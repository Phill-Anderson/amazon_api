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
