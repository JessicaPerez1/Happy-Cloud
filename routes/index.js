const path = require("path");
const Router = require("express").Router();
const passport = require("../authentication/passport");
const apiRoutes = require("./api");
const authRoutes = require("../authentication/authRoutes");

// API Routes
Router.use("/api", passport.authenticate("jwt", { session: false }), apiRoutes);
Router.use("/auth", authRoutes);

// If no API routes are hit, send the React app
Router.use(function (req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = Router;
