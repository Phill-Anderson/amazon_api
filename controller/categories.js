const Category = require("../models/Category");
// контроллер функцуудээ middleware хэлбэрээр бичнэ
const MyError = require("../utils/myError");
//const asyncHandler = require("../middleware/asyncHandler"); өөрийн бичсэн asyncHandler
const asyncHandler = require("express-async-handler");
// try catch хэсэг болгон дээр алдаа барих хэсэгт кодууд олон давтагдаж бичигдэж байгааг express - ийн next(err) функцийг бичиж өгч мөн өөрийн error middleware - ийг бичиж server дээрээ дуудаж өгснөөр шийдэв
exports.getCategories = asyncHandler(async (req, res, next) => {
  const categories = await Category.find();
  res.status(200).json({
    success: true,
    data: categories,
  });
});
exports.getCategory = asyncHandler(async (req, res, next) => {
  const category = await Category.findById(req.params.id);
  // category null эсэхийг шалгана
  if (!category) {
    throw new MyError(req.params.id + " id-тэй категор байхгүй.", 400);
  }
  res.status(200).json({
    success: true,
    data: category,
  });
});
exports.createCategory = asyncHandler(async (req, res, next) => {
  console.log("нэмэх утга :" + JSON.stringify(req.body));
  const category = await Category.create(req.body);
  res.status(200).json({
    success: true,
    data: `Шинээр категор үүсгэнэ`,
  });
});
exports.updateCategory = asyncHandler(async (req, res, next) => {
  const category = await Category.findByIdAndUpdate(req.params.id, req.body, {
    new: true, // функц ажилж дуусмагц хэрхэн яаж update хийсэн эсэхийг category хувьсагч руу буцаана
    runValidators: true, // модел дээр бичигдсэн шалгалтуудыг шалгана
  });
  if (!category) {
    throw new MyError(req.params.id + " id-тэй категор байхгүй.", 400);
  }
  res.status(200).json({
    success: true,
    data: category,
  });
});
exports.deleteCategory = asyncHandler(async (req, res, next) => {
  const category = await Category.findByIdAndDelete(req.params.id);
  if (!category) {
    throw new MyError(req.params.id + " id-тэй категор байхгүй.", 400);
  }
  res.status(200).json({
    success: true,
    data: category,
  });
});
