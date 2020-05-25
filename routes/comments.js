const express = require("express");
const router = express.Router();
const { protect, authorize } = require("../middleware/protect");

const {
  createComment,
  getComments,
  getComment,
  updateComment,
  deleteComment,
} = require("../controller/comments");

// api/v1/categories/:id/books
const { getCategoryBooks } = require("../controller/books");
router.route("/:categoryId/books").get(getCategoryBooks);

//"/api/v1/comments"
router
  .route("/")
  .get(protect, authorize("admin", "operator"), getComments)
  .post(protect, authorize("admin", "operator", "user"), createComment);

//"/api/v1/comments/:id"
router
  .route("/:id")
  .get(protect, authorize("admin", "operator", "user"), getComment)
  .put(protect, authorize("admin", "operator"), updateComment)
  .delete(protect, authorize("admin"), deleteComment);

module.exports = router;
