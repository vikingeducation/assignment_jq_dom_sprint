var h1 = $("h1");
h1.html("Whats up");

var list = $("<ul>")
  .append("<li>1. Change the h1 to something cheeky</li>")
  .append("<li>2. Inside the container for Upcoming Traversals, create and insert an ordered list which corresponds to this one.</li>")
  .append("<li>3. Make all sad classes into happy ones.</li>")
  .append("<li>4. Make the annoying popup link point instead to http://www.cashcats.biz.</li>")
  .append("<li>5. Change the positioning of the annoying popup so it is on the right side of the screen (it's okay to use direct CSS here). Make it 30 pixels lower than its current position by utilizing its current top value.</li>")
  .append("<li>6. Replace the ellipsis ... in one of the suggested topics with content of your choice -- but do so by traversing from a different element.</li>")
  .append("<li>7. Replace the form input with a textarea instead of a input type=\"text\"</li>");

var infoDiv = $(".info-box");
var traversals = $("h4");
traversals.after(list);

var sadDivs = $(".sad");
sadDivs.toggleClass("sad").toggleClass("happy");

var popupLink = $("#annoying-popup a");
popupLink.attr("href", "http://www.cashcats.biz");

popupLink.parent().css("right", "10px");
var topHeight = popupLink.parent().css("top")
var topHeight = parseInt(topHeight) + 30;
popupLink.parent().css("top", String(topHeight) + "px");

// add suggest topics content
var $suggestedTopics = $('.suggested-topics');

var $topicsList = $suggestedTopics.children().last();
var $openLi = $topicsList.children().last().prev();

$openLi.text("Eat more sausage links");

//change text input to textarea 
var $input = $('.input-form form input');
var $textarea = $('<textarea>').attr("placeholder", "Tell me a story!");
$input.first().replaceWith($textarea);





