const express = require("express");
const dotenv = require("dotenv");
// nodejs програм ажиллах болгонд process хрувьсагч үүсч байдаг.
// app - ийн тохиргоог process.env рүү ачаалах ачаалах
dotenv.config({ path: "./config/config.env" });
const app = express();
app.get("/api/v1/categories", (req, res) => {
  res.status(200).send({
    success: true,
    data: "Бүх категоруудыг энд өгнө",
  });
});
app.post("/api/v1/categories", (req, res) => {
  res.status(200).send({
    success: true,
    data: "Бүх категоруудыг энд өгнө",
  });
});
app.get("/api/v1/categories/:id", (req, res) => {
  res.status(200).json({
    success: true,
    data: `${req.params.id} id-тэй категорийн мэдээллийг өгнө`,
  });
});
app.put("/api/v1/categories/:id", (req, res) => {
  res.status(200).json({
    success: true,
    data: `${req.params.id} id-тэй категорийг засна`,
  });
});
app.delete("/api/v1/categories/:id", (req, res) => {
  res.status(200).json({
    success: true,
    data: `${req.params.id} id-тэй категорийг устгана`,
  });
});

app.listen(
  process.env.PORT,
  console.log("Express сэрвэр " + process.env.Port + " порт дээр аслаа")
);
