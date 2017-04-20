var userController = require("../controllers/users.js")

module.exports = function(app){
  app.get("/users", userController.index);
  app.post("/users", userController.create);
}
