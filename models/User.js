const mongoose = require("mongoose");
const { model } = require("./post");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: String,
  password: String,
});

const User = mongoose.model("Iser, UserSchema");

model.exports = User;
