$(document).ready(function() {
  // 1
  $('h1').text('Digital Graffiti');

  // 2
  var $infoBoxSad = $('.info-box.sad'),
      $traversals = $('<ol></ol>'),
      $traversal = $('<li></li>');
  var traversalsArray = [
    'Change the <h1> to something cheeky',
    'Inside the container for "Upcoming Traversals", create and insert an ordered list which corresponds to this one.',
    'Make all sad classes into happy ones.',
    'Make the annoying popup link point instead to http://www.cashcats.biz.',
    'Change the positioning of the annoying popup so it is on the right side of the screen (it\'s okay to use direct CSS here). Make it 30 pixels lower than its current position by utilizing its current top value.',
    'Replace the ellipsis ... in one of the suggested topics with content of your choice -- but do so by traversing from a different element.',
    'Replace the form input with a <textarea> instead of a <input type="text">.'
  ];

  $infoBoxSad.append($traversals);
  $.each(traversalsArray, function(index, value) {
    $traversals.append(
      $traversal.clone().text(value)
    );
  });

  // 3
  $('.sad')
    .toggleClass('happy')
    .toggleClass('sad');

  // 4
  $('#annoying-popup a').attr('href', 'http://www.cashcats.biz');

  // 5
  var $annoyingPopup = $('#annoying-popup');
  var top = $annoyingPopup.position().top;
  $annoyingPopup
    .css('right', '0')
    .css('top', top + 30);

  // 6
  var $ellipsis = $('.suggested-topics ul')
    .children()
    .last()
    .prev();
  $ellipsis.text('Annoying alliteration');

  // 7
  $('[type="text"]').replaceWith('<textarea></textarea>');
});
