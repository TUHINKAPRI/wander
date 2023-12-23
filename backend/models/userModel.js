const mongoose = require("mongoose");
const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "Please enter the username"],
      unique: true,
    },
    email: {
      type: String,
      required: [true, "please enter the email"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Enter the password"],
     
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
