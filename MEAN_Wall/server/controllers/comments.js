const User = require('mongoose').model('User');
const Message = require('mongoose').model('Message')
const Comment = require('mongoose').model('Comment');

module.exports = {
  index:function(req, res) {
    Comment.find({})
      .populate('_user','first_name')
      .populate('_message')
      .then(function(comments) {
        res.json(comments);
      })
      .catch(function(err) {
        throw err;
      })
  },
  create: function(req, res) {

    Comment.create(req.body)
      .then(function(comment) {
        console.log("Komentiii ",comment);
        res.json(comment);
      })
      .catch(function(err) {
        throw err;
      })
  }
}
