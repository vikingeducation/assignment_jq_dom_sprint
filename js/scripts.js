$(document).ready(function(){

//Change the <h1> to something cheeky

$header = $("h1");
$header.html("Something Cheeky?");

//Inside the container for "Upcoming Traversals", 
//create and insert an ordered list of upcoming traversals.
$infoBox = $('div.info-box');
$upcomingTransversals = $(`<ul>
															<li>Event One</li>
															<li>Event Two</li>
															<li>Event Three</li>
															<li>Event Four</li>
													</ul>`);

$upcomingTransversals.appendTo($infoBox)


//Make all sad classes into happy ones.
$('*.sad').removeClass('sad').addClass('happy');
//Make the annoying popup link point instead to http://www.cashcats.biz.
$('#annoying-popup a').attr("href", "http://www.cashcats.biz");

//Change the positioning of the annoying popup 
//so it is on the right side of the screen (it's okay to use direct CSS here). 
//Make it 30 pixels lower than its current position by utilizing its 
//current top value.
$('#annoying-popup').css({
	'right': '0',
	'top' : '30px'
});


//Replace the ellipsis ... in one of the suggested topics 
//with content of your choice -- but do so by traversing 
//from a different element.
//!!!!!!!!!!!!!!!!!!!!!!!!!!!! stuck here
$list = $(".suggested-topics ul li");
$funnyFunctions = $(".suggested-topics ul li").first();
console.log($funnyFunctions.html());
$list[6].remove();
$list.last().before($funnyFunctions);


//Replace the form input with a <textarea> instead of a 
//<input type="text">.

$tA = $("<textarea>");
$input = $("form input");
$input.remove();
$("form").prepend($tA);
console.log($tA);


});

