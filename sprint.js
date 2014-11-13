$(document).ready( function(){

  $('h1').text('Miking Code School');


  $('h4').after('<ol></ol>');
  $('ol').append('<li>Change the h1 to something cheeky</li>')
  $('ol').append('<li>Inside the container for "Upcoming Traversals", create and insert an ordered list which corresponds to this one.</li>');
  $('ol').append('<li>Make all sad classes into happy ones.</li>')
  $('ol').append('<li>Make the annoying popup link point instead to http://www.cashcats.biz.</li>');
  $('ol').append('<li>Change the positioning of the annoying popup so it is on the right side of the screen (it is okay to use direct CSS here). Make it 30 pixels lower than its current position by utilizing its current top value.</li>');
  $('ol').append('<li>Replace the ellipsis ... in one of the suggested topics with content of your choice -- but do so by traversing from a different element.</li>');
  $('ol').append('<li>Replace the form input with a textarea instead of a input type text .</li>');


  var $sads = $('.sad');
  $sads.addClass('happy');
  $sads.removeClass('sad');


  $('#annoying-popup a').attr('href', 'http://www.cashcats.biz');
  $('#annoying-popup').css({
    'top': function(index, value){
      var newValue = parseInt(value) + 30;
      return newValue + 'px';
    },
    'right' : '0'
  });

  var $suggTopics = $('.suggested-topics ul li');
  var $ellipsis = $suggTopics.last().prev();

  $ellipsis.replaceWith('<li class = "blink">this was kinda tough</li>');

  $('input[type="text"]').replaceWith('<textarea rows = "6" cols = "40"></textarea>');


});
