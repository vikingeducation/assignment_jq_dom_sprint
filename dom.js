$(document).ready( function(){
  $("h1").addClass("blink important");

  $("h4").after("<ol style='margin: auto; width: 100px; text-align:center;'><li>one thing</li><li>second thing</li></ol>");

  $("#annoying-popup a").attr("href", "http://www.cashcats.biz");

  $("#annoying-popup").attr("style", "position: absolute; top:30px;")

  $(".sad").removeClass("sad")
  		   .addClass("happy");

  $("ul").children(':contains("...")').text("something cheeky");

  $("input[type='text']").replaceWith("<textarea></textarea>");
})