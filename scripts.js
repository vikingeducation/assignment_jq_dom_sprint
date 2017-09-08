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


//Kill the blinker for now
//$("#annoying-popup").hide();