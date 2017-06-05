
$(document).ready(function() {

//Change h1

  $("h1").text("Something cheeky traversed");

//Insert traversal list

  $(".info-box").append($("<ol></ol>"));
  $("ol").append("<li>Appended item 1</li>");
  $("ol").append("<li>Appended item 2</li>");
  $("ol").append("<li>Appended item 3</li>");


//Make sad classes happy

  $(".info-box").removeClass("sad");
  $(".info-box").addClass("happy");


//Change popup link

  $("#annoying-popup a").attr("href", "http://www.cashcats.biz");

//Change popup location

  $("#annoying-popup")
  	.css("right","10px")
  	.css("top", "40px");


//Replace ellipsis

  $(".super-duper").next().next().next().text("Sassy somethings");

//Replace form

  $('input[type="text"]').replaceWith("<textarea>")

});
