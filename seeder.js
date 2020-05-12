const fs = require("fs");
const mongoose = require("mongoose");
const colors = require("colors");
const dotenv = require("dotenv"); // config.env файлаас унших
const Category = require("./models/Category");
dotenv.config({ path: "./config/config.env" });

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

const categories = JSON.parse(
  fs.readFileSync(__dirname + "/data/categories.json", "utf-8")
);
const importData = async () => {
  try {
    await Category.create(categories);
    console.log("өгөгдлийг импортлолоо...".green.inverse);
  } catch (err) {
    console.log(err.red.inverse);
  }
};

const deleteData = async () => {
  try {
    await Category.deleteMany();
    console.log("өгөгдлийг бүгдийг устгалаа...".green.inverse);
  } catch (err) {
    console.log(err.red.inverse);
  }
};
// console дээр seeder.js - ийг дуудаж ажиллуулах код
// жишээ нь node seeder.js -i команд бичиж ажиллуулахыг доор зааж өгсөн бна
if (process.argv[2] == "-i") {
  importData();
} else if (process.argv[2] == "-d") {
  deleteData();
}
