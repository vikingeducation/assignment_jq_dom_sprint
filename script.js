$('h1').html("something cheeky")


function appendUl() {
  var liElements = "<ol><li>Change the &lth1&gt to something cheeky</li><li>Change the &lth1&gt to something cheeky</li><li>Inside the container for 'Upcoming Traversals', create and insert an ordered list which corresponds to this one.</li><li>Make all sad classes into happy ones.</li><li>Make the annoying popup link point instead to http://www.cashcats.biz.</li><li>Change the positioning of the annoying popup so it is on the right side of the screen (it's okay to use direct CSS here). Make it 30 pixels lower than its current position by utilizing its current top value.</li><li>Replace the ellipsis ... in one of the suggested topics with content of your choice -- but do so by traversing from a different element.</li><li>Replace the form input with a &lttextarea&gt instead of a &ltinput type='text'&gt.</li></ol>";

  $('.info-box').append(liElements)
}

appendUl();

$('.sad').removeClass("sad").addClass("happy");

$("#annoying-popup a").attr("href", "http://www.cashcats.biz");

$("#annoying-popup").css({'right': '0px', 'top': '30px'})

$($('ul').children('li')[6]).html("something else!!")

$("input[type='text']").replaceWith('<textarea>"new text area"</textarea>')
