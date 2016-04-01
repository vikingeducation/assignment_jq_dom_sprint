$(document).ready(function(){
  // Change the <h1> to something cheeky
  $('h1').html('Something Cheeky');



  // Inside the container for "Upcoming Traversals", create and insert an ordered list which corresponds to this one.
  var items = [
    "Change the \<h1> to something cheeky",
    'Inside the container for "Upcoming Traversals", create and insert an ordered list which corresponds to this one.',
    "Make all sad classes into happy ones.",
    "Make the annoying popup link point instead to http://www.cashcats.biz.",
    "Change the positioning of the annoying popup so it is on the right side of the screen (it's okay to use direct CSS here). Make it 30 pixels lower than its current position by utilizing its current top value.",
    "Replace the ellipsis ... in one of the suggested topics with content of your choice -- but do so by traversing from a different element.",
    'Replace the form input with a \<textarea> instead of a \<input type="text">.'
  ];

  var $listItems = [];

  items.forEach(function(element){
    $listItems.push($('<li></li>').text(element));
  });

  var $orderedList = $("<ol></ol>")
    .html($listItems);

  $('.info-box').append($orderedList);



  // Make all sad classes into happy ones.
  $('.sad')
    .removeClass('sad')
    .addClass('happy');



  // Make the annoying popup link point instead to http://www.cashcats.biz.
  $('#annoying-popup a')
    .attr('href', 'http://www.cashcats.biz');



  // Change the positioning of the annoying popup so it is on the right side of the screen (it's okay to use direct CSS here). Make it 30 pixels lower than its current position by utilizing its current top value.
  $('#annoying-popup')
    .css('right', 0)
    .css('top', "+=30");



  // Replace the ellipsis ... in one of the suggested topics with content of your choice -- but do so by traversing from a different element.
  var $listItem = $('.suggested-topics ul li').last().prev();
  $listItem.text('Content of my choice');



  // Replace the form input with a <textarea> instead of a <input type="text">.
  var $textarea = $('<textarea></textarea>')
    .attr('placeholder', "Tell me a story!");

  $('form input')
    .first()
    .replaceWith($textarea);

});


