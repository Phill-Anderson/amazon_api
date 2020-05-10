const express = require("express");
const dotenv = require("dotenv");

// Router оруулж ирэх
const categoriesRoutes = require("./routes/categories");

// Аппын тохиргоог process.env рүү ачаалах
dotenv.config({ path: "./config/config.env" });

const app = express();

app.use("/api/v1/categories", categoriesRoutes);

app.listen(
  process.env.PORT,
  console.log(`Express сэрвэр ${process.env.PORT} порт дээр аслаа... `)
);
