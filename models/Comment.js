const mongoose = require("mongoose");

const CommentSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.ObjectId, ref: "User", required: true },
  bookId: { type: mongoose.Schema.ObjectId, ref: "Book", required: true },
  comment: {
    type: String,
    required: [true, "Комментыг заавал оруулах ёстой."],
    maxlength: [
      1000,
      "Категорийн тайлбарын урт дээд тал нь 1000 тэмдэгт байх ёстой.",
    ],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Comment", CommentSchema);
