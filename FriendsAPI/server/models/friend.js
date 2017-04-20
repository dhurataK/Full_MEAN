console.log("Friends model");
const mongoose = require('mongoose');
const FriendSchema = new mongoose.Schema({
  name:String,
  favoriteLanguage:String
});
mongoose.model('Friend', FriendSchema);
