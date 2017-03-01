$(document).ready(function() {
  $("h1").text("I hate JavaScript")
  $("a").attr("href", "http://www.cashcats.biz");
  $(".sad").each(function() {
    $(this).toggleClass("sad happy");
  });
  $("#annoying-popup").css("right", "0")
    .css("top", "+=30");
  $("li:nth-child(7)").text("Yep");
  $("[type=text]").replaceWith("<textarea placeholder='Tell me a story!'>");
});
