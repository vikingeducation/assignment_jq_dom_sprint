$(document).ready(function(){
  //everything here!
  //change h1
  $('h1').html('something cheeky');

  //create node
  var list = $("<li>").html('item1');

  //insert ordered list
  $('h4').append(list);

  //sad class -> happy class
  $('.sad').addClass('happy').removeClass('sad');

  //change link dest.
  $('#annoying-popup a').attr('href', 'http://www.cashcats.biz');

  //change css of blinking thing
  $('#annoying-popup').css('right', '0');
  $('#annoying-popup').css('top', function(index, value){
    return parseInt(value) + 30 + "px";
  });

  // Replace the ellipsis ...
  $('ul').children().filter(':contains("...")').html("something other than ellipsis");

  // Replace the form input with a textarea
  var textInput = $('input').first();
  var placeholder = textInput.attr('placeholder');
  textInput.replaceWith('<textarea placeholder="' + placeholder + '">');
})







