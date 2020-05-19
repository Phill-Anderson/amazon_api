const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Хэрэглэгчийн нэрийг оруулна уу"],
  },
  email: {
    type: String,
    required: [true, "Хэрэглэгчийн имейл оруулна уу"],
    unique: true,
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Имейл хаяг буруу байна",
    ],
  },
  role: {
    type: String,
    required: [true, "Хэрэглэгчийн эрхийг оруулна уу"],
    enum: ["user", "operator"],
    default: "user",
  },
  password: {
    type: String,
    minlength: 4,
    required: [true, "Нууц үгээ оруулна уу"],
    select: false, // client тал руу энэ талбарыг явуулах боломжгүй гэх тохиргоо
  },
  resetPassword: String,
  resetPasswordExpire: Date,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

UserSchema.pre("save", async function () {
  console.time("salt");
  const salt = await bcrypt.genSalt(10);
  console.timeEnd("salt");

  console.time("hash");
  this.password = await bcrypt.hash(this.password, salt);
  console.timeEnd("hash");
});
UserSchema.methods.getJsonWebToken = function () {
  const token = jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRESIN,
  });
  return token;
};
UserSchema.methods.checkPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};
/* 
UserSchema.statics.myStaticFunction = function(){}; */
module.exports = mongoose.model("User", UserSchema);
