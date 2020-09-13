const db = require("../models")
// const User = require("../models/User");

// Defining methods for the postsController
//find all the posts of a user through user
//use poplutate
module.exports = {
  // find all for each user
  findAllByUserId: function (req, res) {
    console.log("user", req.params.id)
    db.Post.find({ userId: req.params.id })
      .sort({ date: -1 })
      .then((userPosts) =>
        res.json(userPosts))
      .catch((err) => res.status(422).json(err));
  },

  findById: function (req, res) {
    db.Post.findById(req.params.id)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  create: function (req, res) {
    const { userId, post } = req.body;
    console.log("req.body", req.body)
    console.log("post", post)
    db.Post.create({ post: post, userId: req.body.userId })
      .then((newPost) => {
        console.log("new post", newPost)
        // add the post to the users posts array
        db.User.findByIdAndUpdate(
          { _id: userId },
          { $push: { posts: newPost } }
        ).then((updatedUser) => {
          res.json(updatedUser);
        });
        // send the new post back a as json
        // res.json(dbModel);
      })
      //
      .catch((err) => res.status(422).json(err));
  },
  update: function (req, res) {
    db.Post.findOneAndUpdate({ _id: req.params.id }, req.body)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  remove: function (req, res) {
    db.Post.findById({ _id: req.params.id })
      .then((dbModel) => dbModel.remove())
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  findAll: function (req, res) {
    db.Post
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  // find all by date?
  // findAllByDate: function (req, res) {
  //   db.Post.find(req.query)
  //     .sort({ date: -1 })
  //     .then((dbModel) => res.json(dbModel))
  //     .catch((err) => res.status(422).json(err));
  // },
};
