const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const port = process.env.PORT || 8000;
const app = express();

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname,'client')));
app.use(express.static(path.join(__dirname,'bower_components')));

require("./server/config/mongoose.js");
require("./server/config/routes.js")(app)

app.listen(port, function() {
  console.log("Running on ", port);
})
