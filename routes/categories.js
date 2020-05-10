const express = require("express");
const {
  getCategories,
  getCategory,
  createCategory,
  updateCategory,
  deleteCategory,
} = require("../controller/categories");
const router = express.Router();
// router.route() энэ функцэд байгаа зам нь  api/v1/categories - гэсэн route - ийн араас жишээ нь router.route("/") гэсэн байвал  api/v1/categories/ байвал гэсэн нөхцөлийг шалгаж байна.
// server.js дээр гэж тохируулсан: app.use("/api/v1/categories", categoriesRoutes);
router.route("/").get(getCategories).post(createCategory);
router
  .route("/:id")
  .get(getCategory)
  .put(updateCategory)
  .delete(deleteCategory);
module.exports = router;
