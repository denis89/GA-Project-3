var express = require('express');
var app = express();
var port = process.env.PORT || 3000
var mongoose = require('mongoose');

//database setup
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/sports-partner');

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res){
  res.send('Hello World!');
})

app.listen(port);