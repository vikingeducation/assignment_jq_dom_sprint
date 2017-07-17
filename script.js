$(document).ready(function() {

//	Change the <h1> to something cheeky
$("h1").text("Something Cheeky");

//	Inside the container for "Upcoming Traversals", create and insert an ordered list of upcoming traversals
var $list = $("<ol></ol>")
	.append("<li>Change the &lt;h1&gt; to something cheeky</li>")
	.append("<li>Inside the container for &quot;Upcoming Traversals&quot;, create and insert an ordered list of upcoming traversals</li>")
	.append("<li>Make all sad classes into happy ones</li>")
	.append("<li>Make the annoying popup link point instead to http://www.cashcats.biz</li>")
	.append("<li>Change the positioning of the annoying popup so it is on the right side of the screen (it&apos;s okay to use direct CSS here). Make it 30 pixels lower than its current position by utilizing its current top value</li>")
	.append("<li>Replace the ellipsis &hellip; in one of the suggested topics with the content of your choice &mdash; but do so by traversing from a different element</li>")
	.append("<li>Replace the form input with a &lt;textarea&gt; instead of a &lt;input type=&quot;text&quot;&gt;");
$(".info-box.sad").append($list);

//	Make all sad classes into happy ones
$(".sad").addClass("happy").removeClass("sad");

//	Make the annoying popup link point instead to http://www.cashcats.biz
$("#annoying-popup a").prop("href", "http://www.cashcats.biz/");

//	Change the positioning of the annoying popup so it is on the right side of the screen (it's okay to use direct CSS here). Make it 30 pixels lower than its current position by utilizing its current top value
$("#annoying-popup").css("right", "10px").css("top", "+=30px");

//	Replace the ellipsis ... in one of the suggested topics with the content of your choice -- but do so by traversing from a different element
$(".suggested-topics ul li")
	.last()
	.prev()
	.text("content of your choice");

//	Replace the form input with a <textarea> instead of a <input type="text">
var $input = $("form input[type='text']");
var $textarea = $("<textarea></textarea>")
	.prop("placeholder", $input.prop("placeholder"));
$input.after($textarea);
$input.remove();

});
