//Change header
$('h1')[0].innerText = "Something Cheeky!"

//Copy list
$listLi = $('ul').first().clone();
$('h4').append($listLi);

//Happy classes
$('.sad').addClass("happy")
$('.sad').removeClass("sad")

//Change link
$('#annoying-popup a').attr('href','http://www.cashcats.biz')

//Move popup
$('#annoying-popup').css('top', 30).css('right', '0px')

//Replace ...
//$('.super-duper').first().next().next().next().text("Got you!")
//$('li:contains("Killer klicks")').first().prev().text("Got you!")

$('li:contains("Admirable alterations")').next().text("Got you!")

$parent = $('input[type=text').parent();
$('input[type=text').remove();

$parent.prepend("<textarea placeholder='Tell me a story!' />");