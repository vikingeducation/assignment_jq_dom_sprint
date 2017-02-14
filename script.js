$(document).ready(function() {
  $('h1').text("DOM and DOMer");
  $(".info-box.sad").append("<ol><li>Change the h1 to something cheeky</li><li>Inside the container for 'Upcoming Traversals', create and insert an ordered list which corresponds to this one.</li><li>Make all sad classes into happy ones.</li><li>Make the annoying popup link point instead to http://www.cashcats.biz.</li><li>Change the positioning of the annoying popup so it is on the right side of the screen (it's okay to use direct CSS here). Make it 30 pixels lower than its current position by utilizing its current top value.</li><li>Replace the ellipsis ... in one of the suggested topics with content of your choice -- but do so by traversing from a different element.</li><li>Replace the form input with a textarea instead of a input type='text'.</li></ol>");
  $(".sad").removeClass("sad").addClass("happy");
  $("a", "#annoying-popup").attr("href", "http://www.cashcats.biz");
  $("#annoying-popup").css({
     "right": "0",
     "top": "+=30"
   });
   $("li", ".suggested-topics").last()
                               .prev()
                               .text("Always Alliterate");
  $("input[type='text']").replaceWith('<textarea>');
});
