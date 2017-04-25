const Auth = require('../controllers/login.js');

module.exports = function(app) {
  app.post('/auth/login', Auth.login),
  app.delete('/auth/logout', Auth.logout),
  app.post('/auth/register', Auth.register)
}
