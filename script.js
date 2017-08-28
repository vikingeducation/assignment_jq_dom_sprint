$(document).ready(function() {
  $("h1").html("Eat My Shorts!!");

  var traversals =  "<ol>" +
                      "<li>Good Traversal</li>" +
                      "<li>Bad Traversal</li>" +
                      "<li>Medium Traversal</li>" +
                      "<li>Stupendios Traversal</li>" +
                      "<li>Ehh Traversal</li>" +
                    "</ol>";

  $(".info-box").append(traversals)
                .css({
                  'text-align': 'center',
                  'list-style-position': 'inside'
                });

  $(".sad").removeClass("sad")
           .addClass("happy");

  $("#annoying-popup").children('a').attr('href', 'http://www.cashcats.biz');

  var $popupTopPosition = parseInt($("#annoying-popup").css("top"));

  $("#annoying-popup").css({
                        "position": "absolute",
                        "right": "5px",
                        "top": ($popupTopPosition + 30) + "px"
                      });

  $(".suggested-topics").children('ul')
              .children('li')
              .last()
              .prev()
              .html("Custom Content Placed using JQuery");

  var textArea = "<textarea>JQuery replaced the text input with this textarea</textarea>";

  $("input[type=text]").replaceWith(textArea);

});


