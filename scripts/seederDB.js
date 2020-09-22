const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Posts collection and inserts the books below

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/seedGratitude");

const userSeed = [
    {
        email: "gratitude@gmail.com",
        password: "gratitude123",
        userCreated: new Date(Date.now()),
        // post: [post ids]
    },

];

const postSeed = [
    {
        post: "gratitude@gmail.com",
        //   date: backdate
        //   user: user id
    },

];

db.User.remove({})
    .then(() => db.User.collection.insert(userSeed))
    // db.Post.collection.insertMany(postSeed)
    .then(data => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });
