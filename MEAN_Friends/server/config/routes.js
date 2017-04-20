var userController = require("../controllers/users.js")

module.exports = function(app){
  app.get("/users", userController.index);
  app.post("/users", userController.create);
  app.put("/edit/:id", userController.update);
  app.get("/show/:id", userController.show);
  app.delete('/delete/:id', userController.delete);
}
