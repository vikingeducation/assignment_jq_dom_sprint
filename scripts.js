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
//Grab the current popup top setting & add 30px to it  <=YOUAREHERE
let $currentPopupTopVal = $('#annoying-popup').css('top');
let $newPopupTopVal = parseInt($currentPopupTopVal - 'px'); //doesn't work

console.log($newPopupTopVal);

//Move the popup to the right & down 30px using the above
$('#annoying-popup')
	.css({
		'position': 'absolute',
		'display': 'block',
		'right': '10px',
		'top': $newPopupTopVal
	});


//Kill the blinker for now
//$("#annoying-popup").hide();