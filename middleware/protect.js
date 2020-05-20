// create update delete зэрэг үйлдлүүдийг тухайн endpoint болгон дээр
// ижилхэн давтагдах auth кодууд бичиж хамгаалахын оронд middleware бичсэн нь кодууд ахин дахин давтагдахаас сэргийлнэ
const jwt = require("jsonwebtoken");
const asyncHandler = require("./asyncHandler");
const MyError = require("../utils/myError");
const User = require("../models/User");
exports.protect = asyncHandler(async (req, res, next) => {
  //
  if (!req.headers.authorization) {
    throw new MyError(
      "Энэ үйлдлийг хийхэд таны эрх хүрэхгүй байна. Та эхлээд логин хийнэ үү",
      401
    );
  }
  const token = req.headers.authorization.split(" ")[1];
  if (!token) {
    throw new MyError("Токен байхгүй байна.", 400);
  }
  const tokenObj = jwt.verify(token, process.env.JWT_SECRET);
  //req.user = await User.findById(tokenObj.id);
  req.userId = tokenObj.id; // хэрэглэгчийн id - ийг баазаас шүүх бус харин token дотроосоо авч байна. ингэснээр protect middleware ажиллах болгонд userId - ийг баазаас шүүх шаардлагагүй болох юм.
  req.userRole = tokenObj.role;
  console.log("adawdwadwad", tokenObj);
  next(); // дараачийн middleware руу ажиллуул
});

exports.authorize = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.userRole)) {
      throw new MyError(
        "Таны эрх[" +
          req.userRole +
          "] нь энэ үйлдлийг гүйцэтгэхэд хүрэлцэхгүй",
        403
      );
    }
    next();
  };
};
