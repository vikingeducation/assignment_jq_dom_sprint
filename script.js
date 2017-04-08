var traversalText = [
  'Make all sad classes into happy ones',
  'Make the annoying popup link point instead to http://www.cashcats.biz.',
  'Change the positioning of the annoying popup so it is on the right side of the screen (it\'s okay to use direct CSS here). Make it 30 pixels lower than its current position by utilizing its current top value.',
  'Replace the ellipsis ... in one of the suggested topics with content of your choice -- but do so by traversing from a different element.',
  'Replace the form input with a <textarea> instead of a <input type="text">.'
]


var $upcomingTraversals = $('<p></p>');

for (let i = 0; i < traversalText.length; i++) {
  $upcomingTraversals = $upcomingTraversals.add($('<p></p>').text(traversalText[i])
  );
}

$(document).ready(function() { 
  $('h1')
    .first()
    .text("What do you think, big guy?");

  $('div.info-box.sad').append($upcomingTraversals);
  
  $('.sad')
    .removeClass('sad')
    .addClass('happy');

  var $popupLink = $('#annoying-popup').find('a');
  $popupLink.attr('href', 'http://www.cashcats.biz')

  $('#annoying-popup').css({
    'right': '10px',
    'top': '+=30px'
  });

  var $ellipsisItem = $('ul li')
    .last()
    .prev();
  $ellipsisItem.html('Woah, I\'m different now!')

  var $input = $('input[type="text"]');
  var placeholder = $input.attr('placeholder');
  var $textArea= $('<textarea>').attr('placeholder', placeholder);
  $input.replaceWith($textArea);
});