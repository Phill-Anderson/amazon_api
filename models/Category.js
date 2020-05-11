const mongoose = require("mongoose");

const CategorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Категорын нэрийг оруулна уу"],
    unique: true,
    trim: true,
    maxlength: [12, "Категорын нэрний урт дээд тал нь 12 тэмдэгт байх ёстой"],
  },
  description: {
    type: String,
    required: [true, "Категорын тайлбарыг заавал оруулах ёстой"],
    maxlength: [
      500,
      "Категорын тайлбарын урт дээд тал нь 500 тэмдэгт байх ёстой",
    ],
  },
  photo: {
    type: String,
    default: "no-photo.jpg",
  },
  averageRating: {
    type: Number,
    min: [1, "Рэйтинг хамгийн багадаа нэг байх ёстой"],
    max: [10, "Рэйтинг хамгийн багадаа 10 байх ёстой"],
  },
  averageRatingPrice: {
    type: Number,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
module.exports = mongoose.model("Category", CategorySchema);
