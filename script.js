$(document).ready(function() {

  $('h1').html('Some Text');


  var $h4 = $('.info-box').children();
  $h4.append('<ol><li>One</li><li>Two</li><li>Three</li></ol>');

  $('.sad').toggleClass('sad')
    .addClass('happy');

  $('a').attr('href', function() {
    return 'http://www.cashcats.biz';
  })


  var popupValue = $('#annoying-popup').css('top');

  $('#annoying-popup').css('right', '0')
    .css('top', function() {
      return parseInt(popupValue) + 30 + 'px';
    });

  var $unorderedList = $('h3').next();
  var $list = $unorderedList.children();
  var $dots = $list.last().prev();
  $dots.html('New text...');

  var $textArea = $('<textarea placeholder=\'Enter your text here\'></textarea>');
  $('input[type=text]').replaceWith($textArea);
});
