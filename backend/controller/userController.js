// User model
const User = require("../models/userModel");

const createUser = async (req, res) => {
  const { name, email, password } = req.body;

  // to handle duplicate email
  const oldUser = await User.findOne({ email });
  // if oldUser exists we get back the object
  // else we get back null
  if (oldUser) {
    return res.status(401).json({ error: "This email is already in use" });
  }

  //   to create new Record inside db
  const newUser = new User({ name, email, password });
  //_id is created by mongoose

  //   to save in db
  await newUser.save();

  res.status(201).json({ user: newUser });
};

module.exports = { createUser };
