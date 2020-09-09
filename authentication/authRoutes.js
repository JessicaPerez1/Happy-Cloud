const router = require("express").Router();
const jwt = require("jsonwebtoken");
const passport = require("passport");
const userController = require("../controllers/userController");

//POST LOGIN

router.post("/login", function (req, res) {
  passport.authenticate("local", { session: false }, (err, user, info) => {
    if (err || !user) {
      return res.status(400).json({
        message: "Something is not right",
        user: user,
      });
    }
    req.login(user, { session: false }, (err) => {
      if (err) {
        res.send(err);
      }
      const token = jwt.sign(user.toJSON(), "superSecret");
      const { email } = user;
      return res.json({ email, token });
    });
  })(req, res);
});
Router.post("/register", userController.createNew);
module.exports = router;
