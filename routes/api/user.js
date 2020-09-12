const router = require("express").Router();
const postsController = require("../../controllers/postsController");
// const userController = require("../../controllers/userController");

// Matches with "/api/user"
router
    .route("/:id/posts")
    .get(postsController.findAllByUserId)
module.exports = router;