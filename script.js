"use strict";

var listItems = ["Make all sad classes into happy ones.",
  "Make the annoying popup link point instead to www.cashcats.biz.",
  "Change the positioning of the annoying popup so it is on the right side \
  of the screen (it's okay to use direct CSS here). Make it 30 pixels lower \
  than its current position by utilizing its current top value.",
  "Replace the ellipsis ... in one of the suggested topics with content \
  of your choice -- but do so by traversing from a different element.",
  "Replace the form input with a \<textarea\> instead of a \
  <input type='text'>."];

$( document ).ready(function(){

  $("h1").text("Won't someone stop this blinking?!?");

  //Had to stop it!
  $("#annoying-popup").removeClass("blink");

  var list = $(".info-box h4").after("<ul/>");
  $.each(listItems, function(i,val) {
    var listItem = document.createElement("li");
    $(listItem).text(val);
    list.append(listItem);
  });

  $(".sad").removeClass("sad").addClass("happy");

  $("#annoying-popup a").attr("href", "http://www.cashcats.biz");

  $("#annoying-popup").css({"right": 0, "top": "+=30"});

  $(".suggested-topics li:last-child").prev().text("Um?");

  $(".input-form :text").replaceWith("<textarea placeholder='sup'>");
});