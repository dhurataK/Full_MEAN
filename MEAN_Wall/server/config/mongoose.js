var mongoose = require('mongoose');
var fs = require('fs');
var path = require('path');
mongoose.connect('mongodb://localhost/meanWall');
mongoose.connection.on('connected', function() {
  console.log("Connected to the db!");
})
var models_path = path.join( __dirname , '/../models');
fs.readdirSync(models_path).forEach(function(file) {
 if(file.indexOf('.js') > 0) {
   require(models_path + '/' + file);
 }
})
