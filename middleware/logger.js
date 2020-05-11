const logger = (req, res, next) => {
  req.userId = "dwdawfawf2323e"; // middleware - үүд res обьекьтод өгөгдөл нэмж эсвэл хасаж явуулж болдог.
  console.log(
    `${req.method} ${req.protocol}:// ${req.hostname} ${req.originalUrl} `
  );
  next(); // дараачийн middleware луу удирдлагыг шилжүүлнэ
};
module.exports = logger;
