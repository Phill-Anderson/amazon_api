const express = require("express");
const router = express.Router();

// route
router.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    data: "Бүх категориудыг энд өгнө",
  });
});

router.get("/:id", (req, res) => {
  res.status(200).json({
    success: true,
    data: `${req.params.id} ID-тэй категорийн мэдээллийг өгнө`,
  });
});

router.post("/", (req, res) => {
  res.status(200).json({
    success: true,
    data: "Шинээр категори үүсгэх",
  });
});

router.put("/:id", (req, res) => {
  res.status(200).json({
    success: true,
    data: `${req.params.id} ID-тэй категорийг өөрчилнө`,
  });
});

router.delete("/:id ", (req, res) => {
  res.status(200).json({
    success: true,
    data: `${req.params.id} ID-тэй категорийг устгана`,
  });
});

module.exports = router;
