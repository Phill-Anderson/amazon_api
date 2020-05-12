const mongoose = require("mongoose");
const { transliterate, slugify } = require("transliteration");
const CategorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Категорын нэрийг оруулна уу"],
    unique: true,
    trim: true,
    maxlength: [20, "Категорын нэрний урт дээд тал нь 20 тэмдэгт байх ёстой"],
  },
  slug: String,
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
CategorySchema.pre("save", function (next) {
  console.log("pre...");
  //pre функц доторх this түлхүүр үг нь save хийж буй обьектын тухайн талбарыг зааж байдаг
  this.slug = slugify(this.name);
  next();
});
module.exports = mongoose.model("Category", CategorySchema);
