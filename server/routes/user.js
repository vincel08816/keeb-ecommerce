const router = require("express").Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { check, validationResult } = require("express-validator");
const { User } = require("../models/user");
const passport = require("passport");

const secret = process.env.SECRET;
// const auth = () => passport.authenticate("jwt", { session: false });

// @route    POST /users/register
// @desc     Register user
// @access   Public

router.post(
  "/register",
  check("name.firstName", "First name is required").notEmpty(),
  check("name.lastName", "Last name is required").notEmpty(),
  check("email", "Please include a valid email").isEmail(),
  check(
    "password",
    "Please enter a password at least 8 character and contain at least one uppercase letter, one lower case letter, and one special character."
  )
    .isLength({ min: 8 })
    .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z\d@$.!%*#?&]/),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      console.error(errors.array());
      return res.sendStatus(400);
    }

    const { name, email, password } = req.body;
    const lowercaseEmail = email.toLowerCase();
    try {
      if (await User.findOne({ lowercaseEmail })) return res.sendStatus(400);

      const user = new User({ name, email, password, lowercaseEmail });

      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(req.body.password, salt);

      await user.save();
      const payload = { user: { id: user.id } };
      jwt.sign(payload, secret, { expiresIn: 3600 }, (err, token) => {
        if (err) throw err;
        res.cookie("token", token, { httpOnly: true });
        res.sendStatus(200);
      });
    } catch (error) {
      console.error(error);
      res.sendStatus(500);
    }
  }
);

// @route    POST /users/edit
// @desc     Edit User
// @access   Private

router.put(
  "/edit",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    try {
      res.json();
    } catch (error) {
      res.sendStatus(500);
    }
  }
);
// router.put("/forgotpassword", (req, res) => {});
// router.put("/", (req, res) => {});
// router.delete("/", (req, res) => {});

module.exports = router;
