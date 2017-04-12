// Change the <h1> to something cheeky
// Inside the container for "Upcoming Traversals", create and insert an ordered list of upcoming traversals.
// Make all sad classes into happy ones.
// Make the annoying popup link point instead to http://www.cashcats.biz.
// Change the positioning of the annoying popup so it is on the right side of the screen (it's okay to use direct CSS here). Make it 30 pixels lower than its current position by utilizing its current top value.
// Replace the ellipsis ... in one of the suggested topics with content of your choice -- but do so by traversing from a different element.
// Replace the form input with a <textarea> instead of a <input type="text">.


var $traversals = ["Make all sad classes into happy ones.",
                  "Make the annoying popup link point to http://www.cashcats.biz.",
                  "Change the positioning of the annoying popup so it is on the right side of the screen.",
                  "Replace the ellipsis...in one of the suggested topics with content of your choice.",
                  "Replace the form input with a <textarea> instead of a <input type='text'."
                  ];

$(document).ready(function(){
  $("h1").text("Something cheeky");
  $(".info-box sad").append($traversals);
  $(".sad").removeClass(".sad").addClass(".happy");
  $("a[href='http://www.evilwebsite.com']").attr("href", "http://www.cashcats.biz");
  $("#annoying-popup").css({
    "right": "10px",
    "top": "+=30px"
  });
  $('ul li:nth-child(7)').text("Content of your choice");
  $("<input type='text'>").replaceWith("<textarea>");

});

