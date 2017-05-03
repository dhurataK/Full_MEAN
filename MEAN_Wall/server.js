const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const session = require('express-session');
const port = process.env.PORT || 8000;

const session_config = {
  secret:'This is secret!',
  resave:false,
  saveUninitialized:true,
  name:'UserLogin',
  cookie:{
    secure:false,
    httpOnly:false,
    maxAge:6000000
  }
}


const app = express();

app.use(bodyParser.json());
app.use(session(session_config));
app.use(express.static(path.resolve('client')))
app.use(express.static(path.resolve('bower_components')))

require(path.resolve('server/config/mongoose.js'))
require(path.resolve('server/config/routes.js'))(app);

app.listen(port, ()=>console.log(`Running on ${port}`))
