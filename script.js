$(document).ready(function(){
	$('h1').text("Something cheeky!");
	$newList = $("<ol><li>Change the h1</li><li>List upcoming traversals</li><li>Make sad classes happy</li><li>Change annoying pop-up link</li><li>Change positioning of pop-up</li><li>Replace the ... by traversing</li><li>Replace form input with a textarea</li></ol>");
	$(".info-box h4").after($newList);
	$(".sad").removeClass("sad").addClass("happy");
	$("#annoying-popup a").attr("href", "http://www.cashcats.biz");
	$("#annoying-popup")
		.css('top', function(i, val){
		var newVal = parseInt(val) + 30;
		return newVal + "px";
		})
		.css('right', '0px');
	$(".suggested-topics ul li").last().prev().text("Changed by traversing with prev()");
	$('input[type="text"]').replaceWith("<textarea>Now a textarea!</textarea>");
});