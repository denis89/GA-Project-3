var express = require('express')
var router = express.Router()

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
router.post('/', function(req, res){
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

  newUser.save(function(err, user){
    if(err) console.log(err);
    console.log("User has been created!");
    res.json(user);
  });
});

//LOGIN

router.post('/login', function(req, res){
  User.findOne({email: req.body.email}, function(err, user){
    if(err) console.log(err)
    if(!user) return res.send('Incorrect username/password')
    if(user.password !== req.body.password) return res.send('Incorrect username/password')
    res.send('Why can\'t authentication be this easy?')
  })
})

module.exports = router