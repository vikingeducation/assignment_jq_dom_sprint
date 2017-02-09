$(document).ready( function() {

  $("h1").text("Something cheeky");
  $(".info-box.sad").append("<ul><li>List item</li></ul>");
  $(".sad").removeClass("sad")
           .addClass("happy");
  $("a", "#annoying-popup").attr("href", "http://www.cashcats.biz");
  $("#annoying-popup").css({
    "right": "0",
    "top": "+=30"
  });
  $("li", ".suggested-topics").last()
                              .prev()
                              .text("meow");
  $("input[type='text']").replaceWith('<textarea>');
});
