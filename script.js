$(document).ready(function()  {

  $("h1").text("Something Cheeky");

  $(".info-box").children().append("<ul> <li> Form </li> <li> div </li> <li> input </li> </ul>");

  $(".sad").removeClass("sad").addClass("happy");

  $("#annoying-popup a").attr('href', 'http://www.cashcats.biz');

  $("#annoying-popup").css('top', '30px');
  $("#annoying-popup").css('left', '1600px');
  $("#annoying-popup").css('float', 'right');

  $("ul li:nth-child(7)").text("Content Confusion");

  $("input[type=text]").replaceWith("<textarea>");
  $("textarea").attr("placeholder", "Tell me a story!");
  $("textarea").css("rows", "4");
  $("textarea").css("cols", "26");
  $("textarea").css('height', '75px');

});
