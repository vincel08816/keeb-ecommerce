require("dotenv").config();
const connectDB = require("./config-middleware/db");
const express = require("express");
const path = require("path");
const passport = require("passport");
const cp = require("cookie-parser");
const UserRouter = require("./routes/user");
const AuthRouter = require("./routes/auth");

const app = express();

app.use(cp());
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true, limit: "50mb" }));
app.use(passport.initialize());
app.use(express.static("build"));

require("./config-middleware/passport-config")(passport);

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", true);
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin,X-Requested-With,Content-Type,Accept,content-type,application/json"
  );
  next();
});

if (process.env.NODE_ENV === "production") {
  app.use("*", (req, res, next) => {
    if (req.headers["x-forwarded-proto"] === "https") next();
    res.redirect("https://" + req.hostname + req.url);
  });

  app.get("/*", function (req, res) {
    res.sendFile(path.join(__dirname, "build", "index.html"), (err) => {
      if (err) console.error(err);
    });
  });
}

app.use("/users", UserRouter);
app.use("/auth", AuthRouter);

connectDB();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.info(`Server started on port ${PORT}`));
