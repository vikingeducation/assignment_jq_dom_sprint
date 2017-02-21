$(document).ready(function() {
	$("h1").text("Bla bla");

	$(".info-box").append("<ol><li>List Item</li></ol>");

	$(".sad").addClass("happy").removeClass("sad");

	$("#annoying-popup a").attr("href", "http://www.cashcats.biz");

	$("#annoying-popup").css({
	  "top": "40px",
	  "right": "10px"
	});

	$(".input-form").next().find("ul li").eq(6).text("Deferred detachments");

	$("input[type=text]").replaceWith("<textarea>");
});
