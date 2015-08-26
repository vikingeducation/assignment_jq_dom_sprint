$("h1").val("This is not a drill: CLG 3-0 TSM");
$("h1").addClass("blink");

$($("ul").children().elements[6]).val("My new text.");

$($("h4").elements[0]).html("<h4>Upcoming Traversals:</h4><ol><li>Change the h1 to something cheeky</li>\
  <li>Inside the container for \"Upcoming Traversals\", create and insert an ordered list which corresponds to this one.</li>\
  <li>Make all sad classes into happy ones.</li>\
  <li>Make the annoying popup link point instead to http://www.cashcats.biz.</li>\
  <li>Change the positioning of the annoying popup so it is on the right side of the screen (it's okay to use direct CSS here). Make it 30 pixels lower than its current position by utilizing its current top value.</li>\
  <li>Replace the ellipsis ... in one of the suggested topics with content of your choice -- but do so by traversing from a different element.</li>\
  <li>Replace the form input with a textarea instead of a input type=\"text\".</li>\
  <ol>")

$(".sad").addClass("happy")
$(".sad").removeClass("sad");
$("a").attr("href", "http://www.cashcats.biz");
$("#annoying-popup").css("left", "90%");
var top_val = parseInt($("#annoying-popup").css("top").replace(/\D+/,""));
$("#annoying-popup").css("top", top_val + 30);
$("#annoying-popup").on("mouseenter", function(e){
	alert("HI!");
})

$("#annoying-popup").on("mouseleave", function(e){
	alert("BYE!");
})


$($("form").children().elements[0]).remove();
$("form").before(document.createElement("textarea"));
$("#submit-btn").on("click", function(e){
	alert("Removing annoying alerts.");
	$("#annoying-popup").removeEvents();
	e.preventDefault();
})
