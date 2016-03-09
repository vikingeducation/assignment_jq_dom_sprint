$(document).ready(function(){

// Change the <h1> to something cheeky
$('h1').text("Sam's Traversal");

// Inside the container for "Upcoming Traversals", create and insert an ordered list which corresponds to this one.
$SamList = $('<ol><li>Sad To Happy Classes</li><li>Redirect Popup</li><li>Replace ellipsis</li><li>Replace Input</li></ol>');

$SamList.insertAfter($('h4'));

// Make all sad classes into happy ones.
$('.sad').addClass("happy");
$('.sad').removeClass("sad");

// Make the annoying popup link point instead to http://www.cashcats.biz.
  $('#annoying-popup a').attr("href", "http://www.cashcats.biz");

// Change the positioning of the annoying popup so it is on the right side of the screen (it's okay to use direct CSS here). Make it 30 pixels lower than its current position by utilizing its current top value.
$("#annoying-popup").css('right', "30px")
$("#annoying-popup").css('top', "20px")

// Replace the ellipsis ... in one of the suggested topics with content of your choice -- but do so by traversing from a different element.
$('ul').children()[6].replaceWith('<li>This is the new list element.</li>');

// Replace the form input with a <textarea> instead of a <input type="text">.
$form_new_input = '<textarea placeholder = "Tell me a story."></textarea>'
$('form[input]').replaceWith($form_new_input);

});