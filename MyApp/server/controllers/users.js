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
      console.log("New user created", user);
      res.json(user);
    })
    .catch(function(err){
      throw err;
    })
  },
  update: function(req, res){

  },
  delete: function(req, res){

  },
  show: function(req, res){

  }
}
