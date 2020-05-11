const Category = require("../models/Category");
// контроллер функцуудээ middleware хэлбэрээр бичнэ
exports.getCategories = (req, res, next) => {
  res.status(200).json({
    success: true,
    data: "Бүх категориудыг энд өгнө",
  });
};
exports.getCategory = (req, res, next) => {
  res.status(200).json({
    success: true,
    data: `${req.params.id} id- тэй категорийн мэдээллийг өгнө`,
  });
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
exports.updateCategory = (req, res, next) => {
  res.status(200).json({
    success: true,
    data: `${req.params.id} id-тэй мэдээллийг засна`,
  });
};
exports.deleteCategory = (req, res, next) => {
  res.status(200).json({
    success: true,
    data: `${req.params.id} ID-тэй категорийг устгана`,
  });
};
