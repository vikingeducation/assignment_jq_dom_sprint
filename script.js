$(function(){
	var header = $("h1");
	header.html("<h1> jQuery Rocks</h1>");
	var linkLocator = $("#annoying-popup blink");
	var linkPicker = $("a");
	linkPicker.html("<a href='http://www.cashcats.biz'> Click me to get free stuff!!!!</a>");
	var changeClassOf = $(".sad");
	changeClassOf.removeClass().addClass('happy');
	var newList = $('<ul><li>Super selections</li>Cogent collisions</li>Terrible traversals<li>Funny functions</li></ul>');
	var selector = $('.info-box');
	newList.appendTo(selector);
	$( 'input[type="text"]' ).replaceWith("<textarea />")
	$("li").eq(6).html("<li>traversals</li>");
});