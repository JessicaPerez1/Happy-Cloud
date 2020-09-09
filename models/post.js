const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema({
  word: { type: String, required: true },
  user: { type: String, required: true },
  date: { type: Date, default: Date.now },
});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
