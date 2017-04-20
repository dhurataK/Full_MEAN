var userController = require("../controllers/users.js")

module.exports = function(app){
  app.get("/users", userController.index);
  app.post("/users", userController.create);
  app.post("/edit/:id", userController.update);
  app.get("/show/:id", userController.show);
  app.get('/delete/:id', userController.delete);
}
