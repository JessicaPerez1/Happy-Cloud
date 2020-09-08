const router = require("express").Router();
const postRoutes = require("./posts");
const userController = require("../../controllers/userController");

// Post routes
router.use("/posts", postRoutes);

module.exports = router;

//ADD CODE FOR LOGIN
