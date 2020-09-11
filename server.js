const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const routes = require("./routes");
const app = express();
const passport = require("./authentication/passport");

const PORT = process.env.PORT || 4001;
require("dotenv").config();
// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
<<<<<<< HEAD
mongoose.connect(process.env.MONGODB_URI || process.env.MONGO, {
  useCreateIndex: true,
  useNewUrlParser: true,
});
=======
mongoose.connect(
  process.env.MONGODB_URI ||
    "mongodb+srv://jess:1@Mongodb@cluster1.qamsi.mongodb.net/project3?retryWrites=true&w=majority",
  {
    useCreateIndex: true,
    useNewUrlParser: true,
  }
);
>>>>>>> master
// Start the API server
app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
