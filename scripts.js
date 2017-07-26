$(document).ready(function(){
	$('h1').html("Hello World");
	$('.info-box').append("<ol><li>Funny Traversals</li><li>Sad Traversals</li><li>happy traversals</li></ol>");
	$('.sad').removeClass("sad").addClass("happy");
	$('#annoying-popup a').attr("href", "http://www.cashcats.biz");

	$(".suggested-topics ul li").last().prev().text("hello world added text by travering")

	$(".input-form form input").removeAttr("type").attr('type', "<textarea>")
});