var express = require('express');
var app = express();
var port = process.env.PORT || 3000
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var User = require('./models/user');
var seeder = require('mongoose-seed');

//database setup
var mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost:27017/sports-partner');

var data = require('./userseed.js');
seeder.connect('mongodb://localhost:27017/sports-partner', function() {
//seeder code - all goes here?
  // Load Mongoose models 
  seeder.loadModels([
      './models/user.js',
  ]);
  // Clear specified collections 
  seeder.clearModels(['User'], function() {
  // Callback to populate DB once collections have been cleared 
  seeder.populateModels(data);
  });
});
// end of seeder code

// Routes
app.use(express.static(__dirname + '/public'));
// app.use('/users', require('./controllers/users'))

app.get('/', function(req, res){
  res.send('index.html');
})

app.listen(port);