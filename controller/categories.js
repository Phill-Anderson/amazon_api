const Category = require("../models/Category");
// контроллер функцуудээ middleware хэлбэрээр бичнэ
exports.getCategories = async (req, res, next) => {
  try {
    const categories = await Category.find();
    res.status(200).json({
      success: true,
      data: categories,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      error: err,
    });
  }
};
exports.getCategory = async (req, res, next) => {
  try {
    const category = await Category.findById(req.params.id);
    if (!category) {
      return res.status(400).json({
        success: false,
        error: req.params.id + " id-тэй категор байхгүй.",
      });
    }
    res.status(200).json({
      success: true,
      data: category,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      error: err,
    });
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
    res.status(400).json({
      success: false,
      error: err,
    });
  }
};
exports.updateCategory = async (req, res, next) => {
  try {
    const category = await Category.findByIdAndUpdate(req.params.id, req.body, {
      new: true, // функц ажилж дуусмагц хэрхэн яаж update хийсэн эсэхийг category хувьсагч руу буцаана
      runValidators: true, // модел дээр бичигдсэн шалгалтуудыг шалгана
    });
    if (!category) {
      return res.status(400).json({
        success: false,
        error: req.params.id + " id-тэй категор байхгүй.",
      });
    }
    res.status(200).json({
      success: true,
      data: category,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      error: err,
    });
  }
};
exports.deleteCategory = async (req, res, next) => {
  try {
    const category = await Category.findByIdAndDelete(req.params.id);
    if (!category) {
      return res.status(400).json({
        success: false,
        error: req.params.id + " id-тэй категор байхгүй.",
      });
    }
    res.status(200).json({
      success: true,
      data: category,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      error: err,
    });
  }
};
