var $sad = $(".sad");
var $h4 = $(".info-box h4");
var $popUpLink = $("#annoying-popup");
var $eleWithElip = $(".suggested-topics li")
  .last()
  .prev();
var $form = $("form");


$('h1').text("Poop");

$h4.after($('<ol></ol>'));
$h4.next()
  .append($('<li>Change the &lt;h1&gt; to something cheeky</li>'))
  .append($('<li>Inside the container for "Upcoming Traversals", create and insert an ordered list which corresponds to this one.</li>'))
  .append($('<li>Make all sad classes into happy ones.</li>'))
  .append($('<li>Make the annoying popup link point instead to http://www.cashcats.biz.</li>'))
  .append($('<li>Change the positioning of the annoying popup so it is on the right side of the screen (it&#39s okay to use direct CSS here). Make it 30 pixels lower than its current position by utilizing its current top value.</li>'))
  .append($('<li>Replace the ellipsis ... in one of the suggested topics with content of your choice -- but do so by traversing from a different element.</li>'))
  .append($('<li>Replace the form input with a &lt;textarea&gt; instead of a &lt;input type="text"&gt;.</li>'));


$sad.removeClass("sad");
$sad.addClass('happy');

$popUpLink.children().attr("href", "http://www.cashcats.biz");

$popUpLink.css({
  "right" : "0px",
  "top" : "30px"
});

$eleWithElip.text("Fart jokes are pretty funny.");

$('input[type="text"]').remove();
$form.children().before('<textarea>');
