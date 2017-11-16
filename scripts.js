//ASSIGNMENT IN JQUERY:
$(document).ready(function() {

$('h1').html('Sassy');

//add ol and move to center
$('.info-box')
  .css('text-align','center')
  .append($('<ol/>')
    .css('display', 'inline-block')
    .append('<li>The DOM</li>')
    .append('<li>The BOM</li>'));

$('.sad').removeClass('sad').addClass('happy');

$('a').attr('href', 'http://www.cashcats.biz');

$('#annoying-popup').css({'right': '0px', 'top': '40px'});

$('li:nth-child(7)').html('Soaring scripts');

$(":text").replaceWith('<textarea>');

});


