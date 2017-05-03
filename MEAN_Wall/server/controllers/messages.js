const Message = require('mongoose').model("Message");
const User = require('mongoose').model("User");
const Comment = require('mongoose').model("Comment");

module.exports = {
  index:function(req, res) {
    Message.find({})
      .populate('_user','first_name')
      .then(function(messages) {
        res.json(messages);
      })
      .catch(function(err) {
        throw err;
      })
  },
  create:function(req,res) {
    console.log("Te controlleri messages.js ",req.body);
    Message.create(req.body)
      .then(function(message) {
        res.json(message)
      })
      .catch(function(err) {
        throw err;
      })
  }
}
