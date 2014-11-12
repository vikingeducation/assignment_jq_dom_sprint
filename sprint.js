$(document).ready( function(){

  $('h1').replaceWith('<h1>Miking Code School</h1>');
  
  $('h4').after('<ol><li>Change the h1 to something cheeky</li> \
    <li>Inside the container for "Upcoming Traversals", create and insert an ordered list which corresponds to this one.</li> \
    <li>Make all sad classes into happy ones.</li> \
    <li>Make the annoying popup link point instead to http://www.cashcats.biz.</li> \
    <li>Change the positioning of the annoying popup so it is on the right side of the screen (it is okay to use direct CSS here). Make it 30 pixels lower than its current position by utilizing its current top value.</li> \
    <li>Replace the ellipsis ... in one of the suggested topics with content of your choice -- but do so by traversing from a different element.</li> \
    <li>Replace the form input with a textarea instead of a input type text .</li></ol>');


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
