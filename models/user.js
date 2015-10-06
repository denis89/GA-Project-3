var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  dob: Date,
  gender: String,
  rating: Number
})

module.exports = mongoose.model('User', userSchema);