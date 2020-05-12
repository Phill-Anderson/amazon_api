const Category = require("../models/Category");
// контроллер функцуудээ middleware хэлбэрээр бичнэ
const MyError = require("../utils/myError");
// try catch хэсэг болгон дээр алдаа барих хэсэгт кодууд олон давтагдаж бичигдэж байгааг express - ийн next(err) функцийг бичиж өгч мөн өөрийн error middleware - ийг бичиж server дээрээ дуудаж өгснөөр шийдэв
exports.getCategories = async (req, res, next) => {
  try {
    const categories = await Category.find();
    res.status(200).json({
      success: true,
      data: categories,
    });
  } catch (err) {
    next(err);
  }
};
exports.getCategory = async (req, res, next) => {
  try {
    const category = await Category.findById(req.params.id);
    // category null эсэхийг шалгана
    if (!category) {
      throw new MyError(req.params.id + " id-тэй категор байхгүй.", 400);
    }
    res.status(200).json({
      success: true,
      data: category,
    });
  } catch (err) {
    next(err);
  }
};
exports.createCategory = async (req, res, next) => {
  console.log("нэмэх утга :" + JSON.stringify(req.body));
  try {
    const category = await Category.create(req.body);
    res.status(200).json({
      success: true,
      data: `Шинээр категор үүсгэнэ`,
    });
  } catch (err) {
    next(err);
  }
};
exports.updateCategory = async (req, res, next) => {
  try {
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
  } catch (err) {
    next(err);
  }
};
exports.deleteCategory = async (req, res, next) => {
  try {
    const category = await Category.findByIdAndDelete(req.params.id);
    if (!category) {
      throw new MyError(req.params.id + " id-тэй категор байхгүй.", 400);
    }
    res.status(200).json({
      success: true,
      data: category,
    });
  } catch (err) {
    next(err);
  }
};
