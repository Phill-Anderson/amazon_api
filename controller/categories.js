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
exports.createCategory = (req, res, next) => {
  res.status(200).json({
    success: true,
    data: `Шинээр категор үүсгэнэ`,
  });
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
