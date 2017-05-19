/* I had to disable NoScript because I keep forgetting about it
  this is really annoying, after googling errors and realising it was
  NoScript I am a fool */
$(document).ready(function () {
  $("header")
    .find("h1")
    .eq(0)
    .html("Something Cheeky!");

  var $list = $("<ul/>", {
    html: "<li>1</li><li>2</>",
    "class": "myList"
  });
  $("div.info-box").append($list);

  $(".sad").attr("class", "happy");
  $("#annoying-popup a").attr("href", "http://www.cashcats.biz");

  // HAHAHAHAHAHA vv
  $("div.suggested-topics")
    .children()
    .eq(1)
    .children()
    .eq(7)
    .prev()
    .html("Brilliant Binary");
  // You did ask for trasversing

  $("form")
    .children()
    .eq(0)
    .attr("type", "textarea");
});
