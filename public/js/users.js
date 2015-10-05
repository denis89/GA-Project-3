$(document).ready(function(){
  // console.log('Hello world!')
  $playerList = $('#player-list')
  $.get('/users/')
  .done(function(response){
    console.log(response)
    // debugger;
    $playerList.empty();
    $.each(response, function(i, user){
      // console.log('Hi ' + user.name)
      var template = $('#template').html();
      Mustache.parse(template);
      var rendered = Mustache.render(template, user);
      $playerList.append(rendered)
    })
  })
  .fail(function(error){
    console.log(error)
  })
})