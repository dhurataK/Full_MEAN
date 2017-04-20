var mongoose = require("mongoose")
var User = mongoose.model("User")

module.exports = {
  index: function(req, res){
    User.find({})
    .then(function(users){
      res.json(users);
    })
    .catch(function(err){
      throw err;
    })
  },
  create: function(req, res){
    User.create(req.body)
    .then(function(user){
      res.json(user);
    })
    .catch(function(err){
      throw err;
    })
  },
  update: function(req, res){
    console.log(req.params.id);
    console.log(req.body);
    User.findByIdAndUpdate(req.params.id, {$set: req.body})
    .then(function(updatedUser){
      res.json(updatedUser);
      console.log("Updated user ",updatedUser);
    })
    .catch(function(err){
      throw err;
    })
  },
  delete: function(req, res){
    User.findByIdAndRemove(req.params.id)
      .then(function(){
        res.json();
      })
      .catch(function(err){
        throw err;
      })
  },
  show: function(req, res){
    User.findById(req.params.id)
      .then(function(user){
        res.json(user);
      })
      .catch(function(err) {
        throw err;
      })
  }
}
