$(document).ready(function() {
	//#1 Solution
	$("h1").html("Manipulate the Sh*t out of your Traversals");

	//#2 Solution
	$( '.info-box' ).css({
		'width': '600px',
		'margin': 'auto',
		'font-family': 'Open Sans, sans-serif',
		'font-size': "18px",
		'line-height': "27px"
		});

	let $oList = $("<ol>");
	let $li1 = $('<li>Change the <span class="code">&lt;h1&gt;</span> to something cheeky</li>');
	let $li2 = $('<li>Inside the container for "Upcoming Traversals", create and insert an ordered list which corresponds to this one.</li>');
	let $li3 = $('<li>Make all <span class="code">sad</span> classes into <span class="code">happy</span> ones.</li>');
	let $li4 = $('<li>Make the annoying popup link point instead to <span class="code">http://www.cashcats.biz</span></li>')
	let $li5 = $('<li>Change the positioning of the annoying popup so it is on the right side of the screen (it\'s okay to use direct CSS here). Make it 30 pixels lower than its current position by utilizing its current <span class="code">top</span> value.</li>')
	let $li6 = $('<li>Replace the ellipsis <span class="code">...</span> in one of the suggested topics with content of your choice -- but do so by traversing from a different element.</li>')
	let $li7 = $('<li>Replace the form input with a <span class="code">&lt;textarea&gt;</span> instead of a <span class="code">&lt;input type="text"&gt;</span>.</li>')
	let $listItems = [$li1, $li2, $li3, $li4, $li5, $li6, $li7];

	$("h4").after($oList);
	for( var i = 0; i < $listItems.length; i++) {
		$(".info-box ol").append($listItems[i]);
	}

	//#3 Solution
	$(".sad").removeClass("sad").addClass("happy");

	//#4 Solution
	$("#annoying-popup a").attr("href", "http://www.cashcats.biz");

	//#5 Solution
	$("#annoying-popup").css({
		"top": "30px",
		"right": "0px"
	})

	//#6 Solution
	$secondToLastEl = $(".suggested-topics ul li").last().prev();
	$secondToLastEl.html("Massive movements");
	
	//$7 Solution
	$("input[type=text]").replaceWith('<textarea placeholder="Tell me a story!"></textarea>');
})