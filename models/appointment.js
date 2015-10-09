var mongoose = require('mongoose');

var appointmentSchema = new mongoose.Schema({
  date: String,
  user_id: String,
})

module.exports = mongoose.model('Appointment', appointmentSchema);