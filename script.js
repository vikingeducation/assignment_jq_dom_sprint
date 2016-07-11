//"use strict";

$(document).ready(function() {

	// Change h1

	$("h1").css({
		"color": "rgba(123,34,213, 0.5)",
		"margin-top": "100px",
		"font-size": "45px"
	})

	// Add list to upcoming Traversals

	var $upcomingTraversals = $(".info-box");
	var $newListItem = $('<li>inside the container for "Upcoming Traversals"</li>');
	var $newList = $('<ul></ul>')
	$upcomingTraversals.append($newList);
	$(".info-box > ul").append($newListItem);

	// Change sad classes to happy classes

	$sadClasses = $(".sad");
	$sadClasses.removeClass("sad").addClass("happy");

	// Make pop up link point to http://www.cashcats.biz

	$("#annoying-popup > a").attr("href", "http://www.cashcats.biz");

	// Move popup to the right & 30px down

	$("#annoying-popup").css("right", "0");
	$("#annoying-popup").css("top", function(index, value) {
		var newVal = parseInt(value) + 30;
		return newVal + "px";
	})

	// replacing ... by content, traversing from different element

	$list = $(".suggested-topics").children().last().children();

	var $item = $list.first();
	while (true) {
		if ($item.html() === "...") {
			$item.html("Keep Programming !");
			break;
		}
		$item = $item.next();
	}

	// replace input with textarea

	$("input[type=text]").replaceWith("<textarea placeholder= 'Write something here'></textarea>");
});