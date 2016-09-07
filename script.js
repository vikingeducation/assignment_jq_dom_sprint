$('h1').text("I'm the greatest.");

$('.info-box').append('<ol><li>Good</li><li>Good</li><li>Good</li></ol>');

$('.sad').toggleClass('sad happy');

$('#annoying-popup a').attr('href', 'http://www.cashcats.biz');

var currentTop = $('#annoying-popup').css('top');

currentTop = currentTop.slice(0,-2)

$('#annoying-popup').css('top', String(Number(currentTop) + 30) + 'px').css('right', '0px');

var list = $('ul').children()[6];

$(list).text("GREAT FUN!");

$('input[type="text"]').replaceWith('<textarea></textarea>');
