const Auth = require('./../controllers/login.js');
const Users = require('./../controllers/users.js');

module.exports = function(app) {
  app.get('/users', Users.index),
  app.post('/auth/login', Auth.login),
  app.delete('/auth/logout', Auth.logout),
  app.post('/auth/register', Auth.register)
}
