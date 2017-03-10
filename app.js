$(document).ready(function() {

  // 1 - Change the <h1> to something cheeky:

  var $h1 = $('h1');

  $h1.text('Practice with DOM Manipulation');

  // 2 - Inside the container for "Upcoming Traversals", create and insert an ordered list which corresponds to this one:

  //inside div with class 'info-box':
  //traverse to H4 and append with an ordered list

  $newUl = $('<ul></ul>'); // create and hold ul DOM object in memory

  $('.info-box').append($newUl); //create new UL inside of div with 'info-box class'

  //add class to ul for future additions of li's:

  $('.info-box ul').addClass('traversalList');

  //loop through ul DOPM element, adding 7 li's:

  var traversalList = [
  'Change the <h1> to something cheeky',
  'Inside the container for "Upcoming Traversals", create and insert an ordered list which corresponds to this one.',
  'Make all sad classes into happy ones.',
  'Make the annoying popup link point instead to http://www.cashcats.biz.',
  "Change the positioning of the annoying popup so it is on the right side of the screen (it's okay to use direct CSS here). Make it 30 pixels lower than its current position by utilizing its current top value.",
  "Replace the ellipsis ... in one of the suggested topics with content of your choice -- but do so by traversing from a different element.",
'Replace the form input with a <textarea> instead of a <input type="text">.'
  ]

  for (var i = 0; i < 7; i++) {
    $('.traversalList').append($('<li></li>').text(traversalList[i]));
  }

  // 3 - Make all sad classes into happy ones:

  $( '.sad' ).addClass('happy');
  $( '.sad' ).removeClass('sad');

  // 4 - Make the annoying popup link point instead to http://www.cashcats.biz.

  $('.blink a').attr('href', 'http://www.cashcats.biz');

  // 5 - Change the positioning of the annoying popup so it is on the right side of the screen (it's okay to use direct CSS here). Make it 30 pixels lower than its current position by utilizing its current top value:

  $('#annoying-popup').css('top', '+=30');

  // 6 - Replace the ellipsis ... in one of the suggested topics with content of your choice -- but do so by traversing from a different element.

  //grab last item in list:

  var $lastListItem = $('.suggested-topics ul li').last();

  //replace text in list item with ellipsis:

  $lastListItem.prev().text('Bigfoot');

  // - 7 Replace the form input with a <textarea> instead of a <input type="text">.

  //add the textarea tag to the top of form

  var $textArea = ('<textarea></textarea>');

  $('form').prepend($textArea);

  //delete the text input

  $('input[type="text"]').remove();














});