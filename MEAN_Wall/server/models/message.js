const mongoose = require('mongoose');
const {Schema}= mongoose;

var MessageSchema = new Schema({
  message:{
    type:String,
    required:true
  },
  _user:{
    type:Schema.Types.ObjectId,
    ref:'User'
  },
  _comments : [{
    type:Schema.Types.ObjectId,
    ref:'Comment'
  }]

}, {timestamps:true});

module.exports = mongoose.model('Message', MessageSchema);
