var express = require('express')
var router = express.Router()

var User = require('../models/user')

var bodyParser = require('body-parser')

var session = require('express-session')
var cookieParser = require('cookie-parser')

var passport = require('passport')
var LocalStrategy = require('passport-local').Strategy;

router.use(cookieParser());
router.use(session({ secret: 'keyboard cat' }));
router.use(passport.initialize());
router.use(passport.session());

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  User.findById(id, function(err, user) {
    done(err, user);
  });
});

passport.use(new LocalStrategy({
        // by default, local strategy uses username and password, we will override with email
        usernameField : 'email',
        passwordField : 'password',
        passReqToCallback : true // allows us to pass back the entire request to the callback
    },
    function(req, email, password, done) { // callback with email and password from our form
        // find a user whose email is the same as the forms email
        // we are checking to see if the user trying to login already exists
        User.findOne({ 'email' :  email }, function(err, user) {
            // if there are any errors, return the error before anything else
            if (err)
                return done(err);

            // if no user is found, return the message
            if (!user)
                return done(null, false); // req.flash is the way to set flashdata using connect-flash

            // if the user is found but the password is wrong
            // if (!user.validPassword(password))
                // return done(null, false); // create the loginMessage and save it to session as flashdata

            // all is well, return successful user
            return done(null, user);
        });

    })); // end of 'local-login'





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

router.post('/login',
  passport.authenticate('local', { successRedirect: '/success',
                                   failureRedirect: '/login'})
);

module.exports = router