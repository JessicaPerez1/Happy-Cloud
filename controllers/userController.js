const db = require("../models");

module.exports = {
  createNew: async (req, res) => {
    const { email, password } = req.body;
    console.log(db);
    const newUser = await db.User.create({
      email: email,
      password: password,
    });
    res.json(newUser);
  },
};
