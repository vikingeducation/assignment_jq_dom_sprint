
$( document ).ready( function() {
  var $x = $('h1').eq(0);
  $x.text("new h1 content");

  $ol_open = $('<ol>');
  $ol_close = $('</ol>');

  $ol_list_item1 = $('<li>Change the <h1> to</li>');
  $ol_list_item2 = $('<li>Inside the container for "Upcoming Traversals"</li>');
  $ol_list_item3 = $('<li>Make all sad classes into happy ones</li>');
  $ol_list_item4 = $('<li>Make the annoying popup link</li>');
  $ol_list_item5 = $('<li>Change the positioning of the</li>')
  $ol_list_item6 = $('<li>Replace the ellipsis</li>');

  $('div .info-box-sad').append($ol_open);
  $ol_open.append($ol_list_item1);
  $ol_open.append($ol_list_item2);
  $ol_open.append($ol_list_item3);
  $ol_open.append($ol_list_item4);
  $ol_open.append($ol_list_item5);
  $ol_open.append($ol_list_item6);
  $('div .info-box-sad').append($ol_close);

});


