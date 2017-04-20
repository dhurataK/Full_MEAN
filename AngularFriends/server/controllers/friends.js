console.log('Friends controller');
const mongoose = require('mongoose');
const Friend = mongoose.model('Friend')
module.exports = {
  index: function(req, res) {
    Friend.find({})
      .then(function(friends) {
        res.json(friends);
      })
      .catch(function(err) {
        throw err;
      })
  },
  create: function(req, res) {
    Friend.create(req.body)
      .then(function(friend) {
        res.json(friend);
      })
      .catch(function(err) {
        throw err;
      })
  },
  update: function(req, res) {
    Friend.findOne({_id:req.params.id})
      .then(function(friend) {
        friend.name = req.body.name;
        friend.favoriteLanguage = req.body.favoriteLanguage;
        friend.save(function(err, updatedFriend) {
          if(err){
            console.log(err);
          }else {
            res.json(updatedFriend);
          }
        })
      })
      .catch(function(err) {
        throw err;
      })
  },
  delete: function(req, res) {
    Friend.remove({_id: req.params.id}, function(err){
      if(err){
        console.log(err);
      }else{
        res.json({message: "Friend deleted!"});
      }
    })
  },
  show: function(req, res) {
    Friend.findOne({_id: req.params.id}, function(err, result){
      res.json(result);
    })
  }
}
