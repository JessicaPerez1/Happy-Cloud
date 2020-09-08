const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const db = require("../models");

//local strategy
passport.use(
  new LocalStrategy(
    {
      usernameField: "email",
      passwordField: "password",
    },
    function (email, password, cb) {
      return db.User.findOne ({email, password})
      .then (user => {
          if (!user) {
              return cb(null, false, {message: "Incorrect email or password"});
          }
          return cb(null, user {message: "Logged In Successfull"});
      })
      .catch(err => cb(err));
    }
 });
