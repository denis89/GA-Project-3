$(document).ready(function(){
  // console.log('Hello world!')
  var thisMonth = moment().format('MMMM')
  $('#month').text(thisMonth)
  addDates()
})

var addDates = function(){
  var dateCounter = 1;
  var firstDay = moment().date(dateCounter).day()

  daysAhead = moment().date(1).day()

  for(i = 0; i < daysAhead; i++) {
    $('#d' + i).text( moment().date(2 - daysAhead + i).date() )
  }
  
  for(i = firstDay; i < 35; i++) { 
    dateCounter++
    $('#d' + i).text(moment().date(dateCounter).date() )
  }
}