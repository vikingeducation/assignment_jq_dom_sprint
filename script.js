$(document).ready( function() {
  $('h1').text('beyonce had the best music video of all time');
  $('.info-box').append("<ol><li>ima</li><li>let</li><li>you</li><li>finish</li></ol>");
  $('.sad').removeClass('sad').addClass('happy');
  $('#annoying-popup a').attr('href', 'http://www.cashcats.biz');
  $('#annoying-popup').css('top', '40px');
  $('ul').find('li').eq(6).text('be-yon-ce');
  $('input').first().replaceWith('<textarea>');
});