const errorHandler = (err, req, res, next) => {
  console.log(err.stack.underline.cyan);

  // орж ирсэн алдааны обьектынхоо хуулбар обьектыг үүсгэж байна
  const error = { ...err };

  if (error.name === "CastError") {
    error.message = "Энэ ID буруу бүтэцтэй ID байна";
    error.statusCode = 400;
  }
  if (error.code === 11000) {
    error.message = "Энэ талбарын утгыг давхардуулж өгч болохгүй";
    error.statusCode = 400;
  }

  res.status(err.statusCode || 500).json({
    success: false,
    error: error,
  });
};
module.exports = errorHandler;
