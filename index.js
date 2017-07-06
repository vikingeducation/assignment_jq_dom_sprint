
$(document).ready(function(){
	$("h1").html("This Is A New Element");
});

$sad = $(".sad");
$sad
	.addClass("happy")
	.removeClass("sad");

$(".blink a").attr("href", "http://www.cashcats.biz");
$(".input-form").html("<textarea>Default value</textarea>");
$(".suggested-topics ul li:nth-child(7)")
 .html("This is a new Line Item");

$("#annoying-popup")
	.css("margin-left", "calc(100% - 200px)")
	.css("top", "40px");
