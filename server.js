const express = require("express");
const dotenv = require("dotenv");
const fs = require("fs");
const path = require("path");

const morgan = require("morgan");
const rfs = require("rotating-file-stream");
const logger = require("./middleware/logger");
// Router оруулж ирэх
const categoriesRoutes = require("./routes/categories");

// Аппын тохиргоог process.env рүү ачаалах
dotenv.config({ path: "./config/config.env" });
// create a write stream  //*** log/ фолдер дотор  access.log лог бичдэг файл үүсгэх ***/
const acccessLogStream = rfs.createStream("access.log", {
  interval: "1d",
  path: path.join(__dirname, "log"),
});
const app = express();

app.use(logger);
app.use(morgan("combined", { stream: acccessLogStream }));
app.use("/api/v1/categories", categoriesRoutes);

app.listen(
  process.env.PORT,
  console.log(`Express сэрвэр ${process.env.PORT} порт дээр аслаа... `)
);
