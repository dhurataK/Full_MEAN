const mongoose = require('mongoose');
const {Schema} = mongoose;

var CommentSchema = new Schema({
    comment:{
      type: String,
      required: [true,'Write a comment before posting it ;)']
    },
    _user:{
      type:Schema.Types.ObjectId,
      ref:'User'
    },
    _message:{
      type:Schema.Types.ObjectId,
      ref:'Message'
    }
},{timestamps:true});

module.exports = mongoose.model('Comment',CommentSchema);
