$(document).ready(function(){
  // console.log('Hello world!')
  var thisMonth = moment().format('MMMM')
  $('#month').text(thisMonth)
  addDates()
})

var addDates = function(){
  var daysAhead = moment().date(1).day()
  for(i = 0; i < 35; i++) {
    var currentDay = moment().date(2 - daysAhead + i)
    if(currentDay.month() !== moment().month()){
      $('#d' + i).html('<span class="other-month">' + currentDay.date() + '</span>')
    } else if(currentDay.date() === moment().date() && currentDay.month() === moment().month()) {
      $('#d' + i).html('<span class="today">' + currentDay.date() + '</span>')
    } else {
      $('#d' + i).html(currentDay.date())
    }
  }
}