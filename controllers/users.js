var express = require('express')
var router = express.Router()

var moongoose = require('mongoose')
var User = require('../models/user')

var bodyParser = require('body-parser')

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

//INDEX
router.get('/', function(req, res){
  User.find({}, function(err, users){
    if(err) console.log(err)
    res.json(users)
  })
})

//CREATE
router.post('/', function(req, res) {
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

module.exports = router