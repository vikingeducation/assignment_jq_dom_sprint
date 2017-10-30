$(document).ready(function() {
  
  $('h1').text("Something cheeky");

  $orderedList =  $('<ol></ol>')
    .append($('<li>BOM vs. DOM: The Rematch</li>'))
    .append($('<li>Things that go BOM in the night</li>'))
    .append($('<li>.ready() for love </li>'))
    .append($('<li><3 Mr. Robot Season 1 <3</li>'));

  $('h4').parent().append($orderedList);

  $('h4').next().css({
    'text-align':'center', 
    'padding-right':'40px'
  });
  
  $('.sad').toggleClass('sad happy');

  $('#annoying-popup')
    .attr('href', 'http://www.cashcats.biz')
    .css({'top': '30px', 'right': '0'});

  $('ul')
    .children()
    .eq(6)
    .text('whazzup');

  $('input[type = "text"]').replaceWith('<textarea></textarea>');
  
})

  
