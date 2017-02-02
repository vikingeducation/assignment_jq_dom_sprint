$(document).ready(function() {
	$("h1").text("blah blah blah");
	$(".info-box").append("<ol><li>Change the h1 to something cheeky</li><li>Inside the container for 'Upcoming Traversals', create and insert an ordered list which corresponds to this one.</li></ol>");
	$(".info-box ol").append("<li>Make all the sad classes to happy ones.</li>");
	$(".info-box ol").append("<li>Make the annoying pop up link point to something else.</li>");
	$(".info-box ol").append("<li>Change the positioning of the annoying pop up.");
	$(".sad").addClass("happy");
	$(".sad").removeClass("sad");
	$("#annoying-popup a").attr("href", "http://www.cashcats.biz");
	var $ul = $(".suggested-topics").find("li");
	$ul.eq(6).text("I think this is a traversal...");
	$("form input:text").replaceWith("<textarea></textarea>");
	$("textarea").attr("placeholder","Tell me a story!");
});




