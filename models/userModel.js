const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const validator = require("validator");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

userSchema.statics.signup = async function (email, password) {
  //validation
  if (!email || !password) {
    throw Error("All field must be filled");
  }

  // check if the email is valid
  if (!validator.isEmail(email)) {
    throw Error("Invalid email");
  }

  if (!validator.isStrongPassword(password)) {
    throw Error(
      "Password Is not strong, try to combine uppercase,lowercase, symbol and minimum 8 chars"
    );
  }

  const exist = await this.findOne({ email });

  if (exist) {
    throw Error("Email already used");
  }

  // encrypt password or hashing
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);

  //create ana user
  const user = await this.create({ email, password: hash });

  return user;
};

module.exports = mongoose.model("User", userSchema);
