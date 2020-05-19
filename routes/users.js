const express = require("express");
const router = express.Router();

const { register } = require("../controller/users");

//api/v1/categories/:id/books
router.route("/").post(register);

module.exports = router;
