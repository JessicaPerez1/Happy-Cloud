const Router = require("express").Router();
const postsController = require("../../controllers/postsController");

// Matches with "/api/posts"
Router.route("/").get(postsController.findAll).post(postsController.create);

// Matches with "/api/posts/:id"
Router.route("/:id")
  .get(postsController.findById)
  .put(postsController.update)
  .delete(postsController.remove);

module.exports = Router;
