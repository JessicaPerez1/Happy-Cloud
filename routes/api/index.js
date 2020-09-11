const Router = require("express").Router();
const postRoutes = require("./posts");
const userRoutes = require("./user");
const userController = require("../../controllers/userController");

// // routes that we want to protect
Router.get("/welcome", (req, res) => {
  res.send("Welcome to the Jungle.");
});

Router.route("/users").post(userController.createNew);

Router.use("/user", userRoutes)

// Post routes
Router.use("/posts", postRoutes);

module.exports = Router;
