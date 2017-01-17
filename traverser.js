const UPCOMING_TRAVERSALS = ["Make all sad classes into happy ones.",
"Make the annoying popup link point instead to http://www.cashcats.biz.",
"Change the positioning of the annoying popup so it is on the right side of the screen (it's okay to use direct CSS here). Make it 30 pixels lower than its current position by utilizing its current top value.",
"Replace the ellipsis ... in one of the suggested topics with content of your choice -- but do so by traversing from a different element.",
"Replace the form input with a <xmp><textarea></xmp> instead of a <xmp><input type='text'><xmp>"];


$(document).ready(function() {
//1
  $("h1").html("some new rhetoric");
//2
  $(".info-box").append("<ol>");

  $.map(UPCOMING_TRAVERSALS, function(element, index) {
    $upcomingTraversal = $("<li>" + element + "</li>");
    $(".info-box ol").append($upcomingTraversal);
  });
//3
  $(".sad").addClass("happy").removeClass("sad");
//4
  $("#annoying-popup a").attr("href", "http://www.cashcats.biz");
//5
  $("#annoying-popup").css("top", "+=30").css("right", "-0");
//6
  $(".suggested-topics ul li").last().prev().html("here you go dear");
//7
  $(".input-form form").replaceWith($("<textarea>"))
});