$(document).ready(function() {
  $('h1').text('Crazy Manipulation');

  $('.info-box').append($('<ol>'));
  $('ol')
    .append($('<li>Change the h1 to something cheeky.</li>'))
    .append($('<li>Inside the container for "Upcoming Traversals", create and insert an ordered list which corresponds to this one.</li>'))
    .append($('<li>Make all sad classes into happy ones.</li>'))
    .append($('<li>Make the annoying popup link point instead to http://www.cashcats.biz.</li>'))
    .append($("<li>Change the positioning of the annoying popup so it is on the right side of the screen (it's okay to use direct CSS here). Make it 30 pixels lower than its current position by utilizing its current top value.</li>"))
    .append($('<li>Replace the ellipsis ... in one of the suggested topics with content of your choice -- but do so by traversing from a different element.</li>'))
    .append($('<li>Replace the form input with a <code>&lt;textarea&gt;</code> instead of a <code>&lt;input type="text"&gt;</code>.</li>'));

    $('.sad').addClass('happy').removeClass('sad');

    $('a', '#annoying-popup').attr( 'href', 'http://www.cashcats.biz');

    $('#annoying-popup')
      .css('left', '80%')
      .css('top', function(index, value){
      var newValue = parseInt(value, 10) + 30;
      return newValue + 'px';
    });

    $('li', 'ul').eq(6).replaceWith($('li', 'ul').eq(1).clone());

    $('form input').first().replaceWith($('<textarea placeholder="Tell me a story!"></textarea>'));
});