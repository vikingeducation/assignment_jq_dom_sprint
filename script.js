$(document).ready(function(){
  $('h1').text('uhhh, Something Cheeky?');

  $('<ul><li>Get Happy</li><li>Annoying Popup</li><li>CSS</li></ul>').insertAfter($('.info-box h4'));
/*  $('.info-box ul').css('text-align','center');    :( bullets dont move  */

$('.sad').addClass('happy');
$('.happy').removeClass('sad');

$('#annoying-popup a').prop('href','http://www.cashcats.biz')

$('#annoying-popup').css({
  'top':'40px',
  'right':'0px'
});

var unorderedList = $('h3').siblings()[0];
var $unorderedList = $(unorderedList);
$($unorderedList.children()[6]).text('Brawny bullies');

$('form input').first().replaceWith('<textarea>');

});
