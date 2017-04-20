console.log("Future routes");

const path = require('path');

model.exports = function(app) {
  app.get('/', function(req, res) {
    console.log("Get something from the route /");
  })
}
