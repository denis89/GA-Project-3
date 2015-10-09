var mongoose = require('mongoose');

var venueSchema = new mongoose.Schema({
  name: String,
  adress: String,
  price: Number,
  duration: Number
})

module.exports = mongoose.model('Venue', venueSchema);