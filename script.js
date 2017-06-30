


$(document).ready( function(){

  $("h1").replaceWith("<h1>I got changed. Yo!</h1>");

  var traversals = "<ol><li>traversal 1!</li><li>traversal 2!!!</li><ol>";

  $(".info-box").children().after(traversals);

  $(".sad").addClass("happy").removeClass("sad");

  $("#annoying-popup a").attr("href", "http://www.cashcats.biz");

  $("#annoying-popup")
    .css("right", "0px")
    .css("top", "40px");

  $(".suggested-topics ul").children().last().prev().replaceWith("<li>I have been added AFTER the fact!</li>");

  $("input[type=text]").replaceWith("<textarea type='text' placeholder='Tell me a story!''>");

})
