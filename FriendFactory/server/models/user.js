var mongoose = require("mongoose");

var UserSchema = new mongoose.Schema({
  firstname: String,
  lastname: String,
  birthday: Date
}, {timestamps: true})

mongoose.model("User", UserSchema)
