
$( document ).ready( function() {
  var $x = $('h1').eq(0);
  $x.text("new h1 content");

  $ol_open = '<ol id="traversals"></ol>';

  $ol_list_item1 = '<li>Change the h1 to </li>';
  $ol_list_item2 = '<li>Inside the container for "Upcoming Traversals"</li>';
  $ol_list_item3 = '<li>Make all sad classes into happy ones</li>';
  $ol_list_item4 = '<li>Make the annoying popup link</li>';
  $ol_list_item5 = '<li>Change the positioning of the</li>'
  $ol_list_item6 = '<li>Replace the ellipsis</li>';

  $('h4').after($ol_open);

  $('#traversals').append($ol_list_item1);
  $('#traversals').append($ol_list_item2);
  $('#traversals').append($ol_list_item3);
  $('#traversals').append($ol_list_item4);
  $('#traversals').append($ol_list_item5);
  $('#traversals').append($ol_list_item6);

  $('.sad').removeClass("sad").addClass("happy");

  $('#annoying-popup > a').attr("href", "http://www.cashcats.biz");

  var currentTop = $('#annoying-popup').css("top");
  $('#annoying-popup').css("top", currentTop + 10);
  $('#annoying-popup').css("right", 0);

  $('.suggested-topics > ul').children()[6].innerHTML = "blah blah"


});
