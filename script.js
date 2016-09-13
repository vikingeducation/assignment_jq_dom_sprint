$(document).ready(function(){

  $("h1").text("funKY Text");  



  $("h4").after("<ol><li>awesome</li></ol>");

  var $sad = $(".sad")

  $sad.addClass("happy");
  $sad.removeClass("sad");



  $("#annoying-popup a").attr("href", "http://www.cashcats.biz");

   
  $("#annoying-popup").css("right", "0px");
  $("#annoying-popup").css("top", "30px");


  var $listEls = $(".suggested-topics ul li");


  $listEls.eq($listEls.length-2).text("super inserted text");


  $("input").replaceWith("<textarea></textarea>");




})