$(document).ready(function(){

  $('h1').text('Top ways to chill the f... out');
  $('div.info-box h4').append($('<ol>Our new list</ol>'));
  $('div.info-box ol').append($('<li>Item number one</li>'));
  $('div.info-box ol').append($('div.suggested-topics ul li').first());

  $('.sad').addClass('happy').removeClass('sad');

  $('a').attr('href', 'http://www.cashcats.biz');

  $('div#annoying-popup')
        .css('top', function(index, value) {
          return parseInt(value) + 20 + 'px';
        })
        .css('right', '30px');

  $('div.suggested-topics ul li:nth-child(6n)').text('there was elipsis');

  $('form input[type="text"]').replaceWith($('<textarea></textarea>'));
});
