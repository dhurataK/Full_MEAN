const express = require('express');
const bodyparser = require('body-parser');
const path = require('path');
const app = express();
const port = process.env.PORT || 8000; 

app.use(bodyparser.json());

app.use(express.static(path.join(__dirname,'client')));
app.use(express.static(path.join(__dirname,'bower_components')));

app.listen(port, ()=> console.log(`Listening on port ${port}`));
