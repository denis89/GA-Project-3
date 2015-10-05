var express = require('express');
var app = express();
var port = process.env.PORT || 3000
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var User = require('./models/user');
var seeder = require('mongoose-seed'),
    data = require('./data.json');

//database setup
var mongoose = require('mongoose');
seeder.connect('mongodb://localhost:27017/sports-partner', function() {
//seeder code - all goes here?
  // Load Mongoose models 
  seeder.loadModels([
      'app/user.js',
  ]);
  // Clear specified collections 
  seeder.clearModels(['User'], function() {
  // Callback to populate DB once collections have been cleared 
  seeder.populateModels(data);
  });
});
//seeder code

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function(req, res){
  res.send('Hello World!');
})

app.post('/', function(req, res) {
  // console.log(req.body);

  var data = req.body;
  var newUser = new User({
    name: data.name,
    email: data.email,
    password: data.password,
    dob: data.dob,
    gender: data.gender,
    rating: data.rating
  });

  newUser.save(function(err, user) {
    if(err) console.log(err);
    console.log("User has been created!");
    res.json(user);
  });
});

app.listen(port);