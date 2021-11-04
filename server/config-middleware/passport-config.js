const JwtStrategy = require("passport-jwt").Strategy;
const { User } = require("../models/user");

const options = {
  jwtFromRequest: (req) => (req && req.cookies ? req.cookies["token"] : null),
  secretOrKey: process.env.SECRET,
};

const callback = (payload, done) =>
  User.findById(payload.id)
    .then(({ id, email }) => done(null, id ? { id, email } : false))
    .catch((error) => console.error(error));

module.exports = (passport) => {
  passport.use(new JwtStrategy(options, callback));
};
