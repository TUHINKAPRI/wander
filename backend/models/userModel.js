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
    avatar:{
      type:String,
      default:"https://cdn.vectorstock.com/i/preview-1x/17/61/male-avatar-profile-picture-vector-10211761.jpg"
    }
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
