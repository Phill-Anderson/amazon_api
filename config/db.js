const mongoose = require("mongoose");
// mongoose.connect функц нь promise буцаадаг

const connectDB = async () => {
  const conn = await mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  });
  // эсвэл promise хэлбэрээр бичиж болно
  /*  mongoose
    .connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    })
    .then((res) => {
      console.log("холбогдлоо");
    })
    .catch((err) => {
      console.log(err.message);
    }); */
  console.log(`MongoDB холбогдлоо: ${conn.connection.host}`);
};
module.exports = connectDB;
