const Auth = require('./../controllers/login.js');
const Users = require('./../controllers/users.js');
const Messages = require('./../controllers/messages.js');
const Comments = require('./../controllers/comments.js');

module.exports = function(app) {
  app.get('/users', Users.index),
  app.post('/auth/login', Auth.login),
  app.delete('/auth/logout', Auth.logout),
  app.post('/auth/register', Auth.register),
  app.get('/messages', Messages.index),
  app.post('/messages', Messages.create),
  app.get('/comments', Comments.index),
  app.post('/comments', Comments.create)
}
