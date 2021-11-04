const mongoose = require("mongoose");

const connectDB = () =>
  mongoose
    .connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.info("MongoDB Connected..."))
    .catch((err) => {
      console.error("MongoDB Error", err.message);
      process.exit(1);
    });

module.exports = connectDB;
