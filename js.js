
$(document).ready( function(){
  jQuery("#annoying-popup").removeClass("blink");

  $newLi = $('<ul id="new-list"><li>This is new!</li><li>what a great list addtion</li></ul>');
  $newLi.insertAfter($("h4").first());
  $(".sad").removeClass("sad").addClass("happy");
  $("#annoying-popup").children().first().attr("href", "http://www.cashcats.biz");
  $("#annoying-popup").css("right", "10px").css("top", "+=30px");
  $(".super-duper.happy").next().next().next().replaceWith("<li>the ellipsis has been replaced</li>");
  $form = $("form").clone();
  $(".input-form").first().replaceWith("<textarea placeholder='Tell me a story!'>")

})

// http://www.cashcats.biz
