const User = require('mongoose').model("User");

module.exports = {
  index:function(req, res) {
    console.log("Brenda INDEX tek users.js");
    User.find({})
      .then(function(users) {
        console.log("Users",users);
        res.json(users);
      })
      .catch(function(err) {
        throw err;
      })
  }
}
