'use strict';

//OBJECTIVE #1
//Change contents of h1
let $changeH1 = $("h1").text("a.k.a. 'Life'");


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
let $happyNow = $(".sad")
	.addClass('happy')
	.removeClass('sad');


//Kill the blinker for now
let $iHatePopup = $("#annoying-popup").hide();