var mongoose = require("mongoose");

var UserSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true,
    trim: true,
    minlength: 2
  },
  lastname: String,
  birthday: Date
}, {timestamps: true})

mongoose.model("User", UserSchema)
