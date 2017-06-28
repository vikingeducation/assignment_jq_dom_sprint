$(document).ready(function() {
  $("h1").html("I couldn't really think of anything too cheeky!");
  $(".info-box").append("<ol><li>upcoming traversal</li><li>another upcoming traversal</li></ol>");
  $(".sad").addClass("happy").removeClass("sad");
  $("#annoying-popup a").attr("href", "http://www.cashcats.biz");
  $("#annoying-popup").css("left","100%");
  $("#annoying-popup").animate({ top: "+=30" });
  $('.suggested-topics li').each(function() {
    var text = $(this).text();
    $(this).text(text.replace('...', 'it worked!'));
  });
  $(":text").replaceWith("<textarea></textarea>");
});
