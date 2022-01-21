const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: [true, "The user name is required field"],
    unique: [true, "The user name already exists"],
    minlength: [8, "The user name nees to have a minlength 8"],
    maxlength: [100, "The user name can't have more than 100 character"],
  },
  userEmail: {
    type: String,
    required: [true, "The user email is required field"],
    unique: [true, "The user email already exists"],
  },
  userPassword: {
    type: String,
    required: [true, "The user password is required field"],
    minlength: [8, "The user  password need to have a minlength 8"],
    maxlength: [30, "The user password can't have more than 30 character"],
  },
  userTel: {
    type: String,
    required: [true, "The user phone number is required field"],
    minlength: [6, "The user phone number need to have a minlength 6"],
    maxlength: [15, "The user phone number can't have more than 15 character"],
  },
  userAddress: {
    type: String,
    required: [true, "The user Address is required field"],
  },
  userBirthDay: {
    type: Date,
    default: Date.now(),
  },
});

const UserModel = mongoose.model("user", userSchema);

module.exports = { UserModel };
