const User = require("../models/userModel");

//login user
const loginUser = async (req, res) => {
  res.json({ messege: "login" });
};

//signup user
const signupUser = async (req, res) => {
  res.json({ messege: "signup" });
};

module.exports = {
  loginUser,
  signupUser,
};
