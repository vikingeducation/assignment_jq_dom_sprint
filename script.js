$(document).ready(function() {
  $("h1").text("Do Or Do Not, There Is No Try");
  var traversalList = ["Change the <h1> to something cheeky",
                    "Inside the container for \"Upcoming Traversals\", create and insert an ordered list which corresponds to this one.",
                    "Make all sad classes into happy ones.",
                    "Make the annoying popup link point instead to http://www.cashcats.biz.",
                    "Change the positioning of the annoying popup so it is on the right side of the screen (it's okay to use direct CSS here). Make it 30 pixels lower than its current position by utilizing its current top value.",
                    "Replace the ellipsis ... in one of the suggested topics with content of your choice -- but do so by traversing from a different element.",
                    "Replace the form input with a <textarea> instead of a <input type=\"text\">."];
  
  $(".info-box").append("<ol>");
  
  for (var i = 0; i < traversalList.length; i++) {
    $(".info-box ol").append("<li>");
    listItem = $(".info-box ol li").last();
    listItem.text(traversalList[i]);
  };

  $(".sad").removeClass("sad").addClass("happy");

  website = $("#annoying-popup a");
  website.attr("href", "http://www.cashcats.biz");

  popup = $("#annoying-popup");
  popup.css("right", "10px");
  popup.css("top", function(i, val) {
    var newVal = parseInt(val) + 30;
    return newVal + "px";
  });

  emptySuggestion = $(".suggested-topics ul li").last().prev();
  emptySuggestion.text("Incredible iterations");

  $("input").first().replaceWith("<textarea placeholder='Tell me a story!'>");
});