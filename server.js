const express = require("express");
const dotenv = require("dotenv");
var path = require("path");
var rfs = require("rotating-file-stream");
const connectDB = require("./config/db");
const colors = require("colors");
const errorHandler = require("./middleware/error");
var morgan = require("morgan");
const logger = require("./middleware/logger");
const fileupload = require("express-fileupload");

// Router оруулж ирэх
const categoriesRoutes = require("./routes/categories");
const booksRoutes = require("./routes/books");
const usersRoutes = require("./routes/users");
const commentsRoutes = require("./routes/comments");

// Аппын тохиргоог process.env рүү ачаалах
dotenv.config({ path: "./config/config.env" });

var cors = require("cors");
const app = express();

connectDB();

// create a write stream (in append mode)
var accessLogStream = rfs.createStream("access.log", {
  interval: "1d", // rotate daily
  path: path.join(__dirname, "log"),
});

var whitelist = ["http://localhost:5500", "http://localhost:5501"];
var corsOptions = {
  origin: function (origin, callback) {
    // origin нь backEnd service -ийг дуудаж буй тухайн вэб домайн
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("CORS- оор хандахыг хориглосон"));
    }
  },
};
// Body parser
app.use(express.json());
app.use(cors(corsOptions));
app.use(fileupload());
app.use(logger);
app.use(morgan("combined", { stream: accessLogStream }));
app.use("/api/v1/categories", categoriesRoutes);
app.use("/api/v1/books", booksRoutes);
app.use("/api/v1/users", usersRoutes);
app.use("/api/v1/comments", commentsRoutes);
app.use(errorHandler);

const server = app.listen(
  process.env.PORT,
  console.log(`Express сэрвэр ${process.env.PORT} порт дээр аслаа... `.rainbow)
);

process.on("unhandledRejection", (err, promise) => {
  console.log(`Алдаа гарлаа : ${err.message}`.underline.red.bold);
  server.close(() => {
    process.exit(1);
  });
});
