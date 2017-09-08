'use strict';

//OBJECTIVE #1
//Change contents of h1
$("h1").text("a.k.a. 'Life'");


//OBJECTIVE #2
//Assign new content to variables for later use
let $newOl = $("<ol id='new-stuff'></div>");
let listItems = ["<li>Meow</li>",
				"<li>Woof</li>",
				"<li>Ribbit</li>",
				"<li>Roar</li>"];

//Target 'Upcoming Traversals' & add the new content from above with styling
$(".info-box")
	.css({
		'display': 'block',
		'width': '15%',
		'margin': 'auto',
		'text-align': 'center'
	})
	.append($newOl.append(listItems));


//OBJECTIVE #3
//Change class .sad to class .happy
$(".sad")
	.addClass('happy')
	.removeClass('sad');


//OBJECTIVE #4
//Change the popup link address
$('#annoying-popup a')
	.attr('href', 'http://www.cashcats.biz');


//OBJECTIVE 5
//Grab the popup
$('#annoying-popup')

	//Change the 'top' CSS attribute to 40px by adding 30px to the current value
	.css('top', function(index, value) {
		return (parseInt(value.slice(0, 2)) + 30).toString() + 'px';
	})

	//Move the popup to the right of the screen
	.css('right', '10px');


//OBJECTIVE 6
//Traverse through elements to grab the correct <li>
let $replaceEllipsis = $('.suggested-topics ul li')
	.last()
	.prev();

//Change the content of the <li> grabbed above
$replaceEllipsis.html("<strong>The content of my choice</strong>");


//OBJECTIVE 7
//Grab the correct <input> & replace it with a <textarea>
$('.input-form form input[type="text"]')
	.replaceWith('<textarea>');