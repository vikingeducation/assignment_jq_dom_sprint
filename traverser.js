$(document).ready(function() {
  // change h1
  $('h1').text("Kelsey + Julia RULE");

  // insert ordered list
  $myNewOL = $('<ol><li>Make sad classes happy</li><li>Kill annoying popup</li><li>Replace ellipsis...</li></ol>');

  $myNewOL.insertAfter($('h4'));

  // make sad classes happy
  $('.sad').addClass("happy");
  $('.sad').removeClass("sad");


  // change popup href
  $('#annoying-popup a').attr("href", "http://www.cashcats.biz");

  // move popup to the right and lower it by 30px
  var currentHeight = parseInt($('#annoying-popup').css("top"))
  $('#annoying-popup').css("top", currentHeight + 30);
  $('#annoying-popup').css("right", 0);

  // change ellipsis from another element
  $('ul').children()[6].innerHTML = "BYE BYE ELLIPSIS";

  // replace form input with <textarea>

})


