$(document).ready(function() {
  //change h1
  $("h1").html("Reverse and Obfuscate");

  //add upcoming list
  $(".info-box").append($("<ol></ol>"));
  $("ol").append("<li>Nashville</li>");
  $("ol").append("<li>London</li>");
  $("ol").append("<li>Paris</li>");
  $("ol").append("<li>Barcelona</li>");

  //switch sad classes to happy
  var $sadClasses = $(".sad");
  $sadClasses.removeClass("sad");
  $sadClasses.addClass("happy");

  //modify popup link
  $("#annoying-popup a").attr("href", "http://www.cashcats.biz");

  //move popup down
  var oldTop = $("#annoying-popup").position().top;
  $("#annoying-popup").css("top", oldTop+30+"px");

  //replace ellipsis
  $("ul").children().last().prev().text("Crazy callbacks");

  //change input type text to textarea
  $(".input-form").find(":text").replaceWith('      <textarea placeholder="Tell me a story!">');
});
