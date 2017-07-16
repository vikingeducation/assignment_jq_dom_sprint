$(document).ready(function() {
  // Change the <h1> to something cheeky
  $("h1").first().html("hello world");

  // Inside the container for "Upcoming Traversals", create and insert an
  // ordered list of upcoming traversals.
  var $ol = $("<ol></ol>")
    .append("<li>one</li>")
    .append("<li>two</li>")
    .append("<li>three</li>");
  $(".info-box").first()
    .append($ol);

  // Make all sad classes into happy ones.
  $(".sad").toggleClass("sad happy")

  // Make the annoying popup link point instead to http://www.cashcats.biz.
  $("#annoying-popup a").first()
    .attr("href", "http://www.cashcats.biz");

  // Change the positioning of the annoying popup so it is on the right
  // side of the screen (it's okay to use direct CSS here). Make it 30
  // pixels lower than its current position by utilizing its current top value.
  var $popup = $("#annoying-popup");
  var position_top = parseInt($popup.css("top"));
  $popup.css("top", (position_top + 30));

  // Replace the ellipsis ... in one of the suggested topics with content
  // of your choice -- but do so by traversing from a different element.
  $(".suggested-topics ul li").first()
    .html("hello world");

  // Replace the form input with a <textarea> instead of a <input type="text">.
  var $input = $("input[type=text]");
  $input
    .replaceWith("<textarea>"+$input.attr("placeholder")+"</textarea>");
});
