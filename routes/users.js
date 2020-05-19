const express = require("express");
const router = express.Router();

const { register, login } = require("../controller/users");

//api/v1/categories/:id/books
router.route("/").post(register);
router.route("/login").post(login);
module.exports = router;
