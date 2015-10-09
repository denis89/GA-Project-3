$(document).ready(function(){
  // console.log('Hello world!')
  addDates()
  addUser();
})
 
var addUser = function(){
  $('#profile td').on('click', function() {
    $(this).append('<a href="#"> <br>free</a>');
    // grab the element we clicked on
    // create the <a> tag
    // add the tag at the end
});
}

var addDates = function(){
  var thisMonth = moment().format('MMMM')
  $('#month').text(thisMonth)
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