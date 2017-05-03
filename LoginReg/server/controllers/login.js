const User = require('mongoose').model("User");
module.exports = {
    login: function(request, response) {
      User.findOne({email:request.body.email})
        .then(function(user) {
          console.log("User logged in", user);
          login(request,response,user);
        })
        .catch(function(err) {
          throw err;
        })
    },
    logout: function(request, response) {
      request.session.destroy();
      response.clearCookie('userID');
      response.clearCookie('expire');
      response.json(true);
    },
    register: function(request, response) {
      User.create(request.body)
        .then(function(user) {
          console.log("User registered: ",user);
          login(request,response,user);
        })
        .catch(function(err) {
          throw err;
        })
    }
}
function login(req, res, user) {
  req.session.user = user.toObject();
  res.cookie('userID', user._id.toString())
  res.cookie('expire', Date.now()+86400*1000)
  res.json(true);
}
