const express = require("express");
const router = express.Router();

const {
  register,
  login,
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
} = require("../controller/users");

//api/v1/users
router.route("/").get(getUsers).post(createUser);

router.route("/register").post(register);
router.route("/login").post(login);

// api/v1/users/:id
router.route("/:id").get(getUser).put(updateUser).delete(deleteUser);
module.exports = router;
