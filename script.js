function doAssignment(){
	$hOne = $("h1").eq(0);
	$hOne.html("I make annoying websites!");

	$hTwo = $(".info-box h4");
	willAppend = "<ol>";
	traversalArray = ["Jan 14th", "Jan 15th", "Jan 21", "Feb 29th (2020)", "More to come soon!"];

	for(i = 0; i < traversalArray.length; i++){
	willAppend += "<li>" + traversalArray[i] + "</li>"; 
	}

	willAppend += "</ol>";
	$hTwo.append(willAppend);

	$hThree = $(".sad");
	$hThree.addClass('happy');
	$hThree.removeClass('sad');

	$hFour = $("#annoying-popup a");
	$hFour.attr("href", "http://www.cashcats.biz");

	$hFive = $("#annoying-popup");
	$hFive.css("right", "0");
	$hFive.css("top", `${$hFive.position().top + 30}px`);

	$hSix = $("ul");
	$hSix.children().eq(6).html("The blink tag is starting to make me crazy.");

	$hSeven = $('input[type="text"]');
	placeholderSaver = $hSeven.attr("placeholder");

	$hSeven.replaceWith("<textarea></textarea>");

	$hSeven = $("textarea");
	$hSeven.attr("placeholder", `${placeholderSaver}`);
}	

$(document).ready(function(){doAssignment()});
