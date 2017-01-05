$(document).ready(function(){

  $("h1").html("Swoop and Switch");

  $('.info-box').append("<ol><li>Make all sad classes into happy ones.</li><li>Make the annoying popup link point instead to http://www.cashcats.biz.</li><li>Change the positioning of the annoying popup so it is on the right side of the screen (it's okay to use direct CSS here). Make it 30 pixels lower than its current position by utilizing its current top value.</li></li>Replace the ellipsis ... in one of the suggested topics with content of your choice -- but do so by traversing from a different element.</li><li>Replace the form input with a textarea instead of a input type='text'.</li></ol>");

  $(".sad").attr("class", "happy");

  $("a", "#annoying-popup").attr("href", "http://www.cashcats.biz");

  $annoying = $("#annoying-popup");
  $annoying.css({ top: '+=30px', right: '50px' });

  var $topics = $(".suggested-topics");
  var $blank = $topics.find("li:contains(\'...\')");
  $blank.html("Wherz mi muny, cat?");

  var $storyField = $('[type=\'text\']', ".input-form");
  $storyField.replaceWith($('<textarea>')
                            .attr("placeholder", "Tell me a story"));

});
