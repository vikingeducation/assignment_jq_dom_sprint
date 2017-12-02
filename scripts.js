$(document).ready(function(){
  // Change H1
  $('h1').text('Something Cheeky!'); 

  // Create and insert ol of upcoming traversals
  let $li1 = $('<li>').html(`Make all <code>sad</code> classes into <code>happy</code> ones`);
  
  let $li2 = $('<li>').html(`Make the annoying popup link point instead to <a href="http://www.cashcats.biz">http://www.cashcats.biz</a>`);

  let $li3 = $('<li>').html(`Change the positioning of the annoying popup so it is on the right side of the screen. Make it 30 pixels lower than its current position by utilizing its current <code>top</code> value`);

  let $li4 = $('<li>').html(`Replace the ellipses <code>...</code> in one of the suggested topics with the content of your choice -- but do so by traversing from a different element.`);

  let $li5 = $('<li>').html(`Replace the form input with a <code>&lt;textarea&gt;</code> instead of a <code>&lt;input type="text"&gt;</code>`);

  let $ol = $('<ol>')
    .append($li1)
    .append($li2)
    .append($li3)
    .append($li4)
    .append($li5);

  $('.info-box')
    .eq(0)
    .append($ol);

  // Make all sad classes into happy ones
  $('.sad').attr('class', 'happy');

  // Change href of pop-up link
  $('#annoying-popup a')
    .eq(0)
    .attr('href', 'http://www.cashcats.biz');

  // Change positioning of annoying pop-up
  $('#annoying-popup')
    .css('top', function(idx, val) {
      return val + 30;
    })
    .css('right', '20px');

  // Replace the ellipses
  let $6thLi = $('.suggested-topics ul li').eq(5);

  $6thLi
    .next()
    .text('Sneaky Sibling');

  // Replace the form input
  let $textarea = $('<textarea>')
    .attr('placeholder', 'Tell me a story!');

  $('.input-form input[type="text"]')
    .eq(0)
    .replaceWith($textarea);

});
