$(document).ready(function(){
  $("h1").text("hello world");

  $(".info-box").append("<ol class='my-list'></ol>");
  for (var i = 0; i < 3; i++){
    $(".my-list").append("<li>Hello</li>");
  };

  $(".sad").removeClass("sad").addClass("happy");
  $("#annoying-popup").attr("href", "http://www.cashcats.biz")
                      .css("right", "0")
                      .css("top", "30px");
  $(".suggested-topics ul li").last().prev().text("mother fucker");
  $(".input-form input").first().replaceWith("<textarea type='text'>")
});
