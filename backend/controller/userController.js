// User model
const User = require("../models/userModel");

const createUser = async (req, res) => {
  const { name, email, password } = req.body;

  //   to create new Record inside db
  const newUser = new User({ name, email, password });
  //_id is created by mongoose

  //   to save in db
  await newUser.save();

  res.json({ user: newUser });
};

module.exports = { createUser };
