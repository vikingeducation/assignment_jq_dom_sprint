$(document).ready( function(){ 
	console.log("Done loading ...");

//
//1. Change the <h1> to something cheeky
//

//DC: Use jQuery methods
//	$('h1').html("My Cheeky (html method): " + $('h1').html());
//	$('h1').eq(0).html("My Cheeky (eq method): " + $('h1').eq(0).html());
	$('h1').first().text('hubba bubba bubble gum');

//DC: Use DOM methods
//	$('h1')[0].innerText = "My Cheeky (innerText method): " + $('h1')[0].innerText;
//	$('h1').get(0).innerText = "My Cheeky (get method): " + $('h1').get(0).innerText;
//	$('h1').get(0).innerText = "My Cheeky (get method): " + $('h1').get(0).innerText;

//
//2.Inside the container for "Upcoming Traversals", create and insert an ordered list of upcoming traversals.
//	
//	$('h4').append('<p>HI</p>');
// first create ordered list tag
var	$myOl = $('<ol></ol>');
//find the element
$('div.info-box.sad').append($myOl);

//create text array
var $upcoming_traversals = [
	'Make all sad classes into happy ones',
	'Make the annoying popup link point instead to new http',
	'Change the positioning of the annoying popup so it is on the right side of the screen',
	'Replace the ellipsis ... in one of the suggested topics with the content of your choice',
	'Replace the form input with a <textarea> instead of a <input type="text">'
];

//create each list tag, fill with text from text array, append to ordered list
$.each($upcoming_traversals, function(index,element){
	var $myLi = $('<li></li>');
	$myLi.text(element);
	$myOl.append($myLi);
});

//
//3.	Make all sad classes into happy ones.
//Note: you'll find the happy sad classes in the CSS

$('.sad').addClass('happy');
$('.sad').removeClass('sad');

//
//4. Make the annoying popup link point instead to http://www.cashcats.biz.
//

//$('#annoying-popup a').get(0).href = "http://www.cashcats.biz";
$('#annoying-popup a').attr('href', 'http://www.cashcats.biz');

//
//5. Change the positioning of the annoying popup so it is on the right side of the screen 
//(it's okay to use direct CSS here). Make it 30 pixels lower than its current position by 
//utilizing its current top value.
//
//	original CSS
//  position: absolute;
//  top: 10px;
//  height: 100px;

//style 1
//$('#annoying-popup')
//	.css('top','+=30px')
//	.css('right', '0');

//style 2 - preferred
$('#annoying-popup').css({
  'top': '+=30px',
  'right': '0'
});

//
//6. Replace the ellipsis ... in one of the suggested topics with the content of your choice -- but do so by traversing from a different element.
//
//starting at the div's class' ul
$('div.suggested-topics ul').children().last().prev().text('found you!');
//locate by string search
//$( ".suggested-topics ul li:contains('...')").text('found you too!');

//
//7.	Replace the form input with a <textarea> instead of a <input type="text">.
//

/*
Replace: 
<input placeholder="Tell me a story!" type="text">

With something like:
<textarea name="textarea"
   rows="10" cols="50">Write something here</textarea>

// Replace one element with another
$("#some-list li").last().replaceWith('<li class="new-last-li">New one!</li>');
*/   

//find the element   
var $oldStuff = $('div.input-form form input[type="text"]');
var placeholder_text = $oldStuff.attr('placeholder');

//create new element 
var $newStuff = $('<textarea>')
	.attr('name', 'story_textarea')
	.attr('rows', 10)
	.attr('placeholder', placeholder_text)
	.attr('cols', 50);

//do the replacement
$oldStuff.replaceWith($newStuff);
  
} );
