const express = require('express');
const bodyparser = require('body-parser');
const path = require('path');
const app = express();
const port = process.env.PORT||8000;

app.use(bodyparser.json());
app.use(express.static(path.resolve('client')));
app.use(express.static(path.resolve('bower_components')));

require("./server/config/mongoose.js");
require("./server/config/routes.js")(app);
app.listen(port, ()=> console.log(`Running on ${port}`));
