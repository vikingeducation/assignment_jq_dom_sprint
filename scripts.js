'use strict';

//Change contents of h1
let $changeH1 = $("h1").text("a.k.a. 'Life'");


//Target 'Upcoming Traversals' & add <ol> with CSS
let $upcomingTraversalsTagret = $(".info-box")
	.css({
		'display': 'block',
		'width': '15%',
		'margin': 'auto',
		'text-align': 'center'
	})
	.append('<ol>');

//Add the list items to newly created <ol>
let $upcomingTraversals = $(".info-box ol")
	.append('<li>Meow</li>')
	.append('<li>Woof</li>')
	.append('<li>Ribbit</li>')
	.append('<li>Roar</li>');

//Change class .sad to class .happy
let $happyNow = $(".sad")
	.addClass('happy')
	.removeClass('sad');

let $iHatePopup = $("#annoying-popup").hide();
//$upcomingTraversalsTagret.attr($upcomingTraversals);