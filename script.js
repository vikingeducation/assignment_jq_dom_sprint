// script file
$(document).ready(function(){

// maniuplate H1
$("h1").text("Manipulate this!");


// insert list of manipulations
var tasks = "<ol>";
    tasks += "<li>Change the <code>&ltH1&gt</code> to something cheeky</li>";
    tasks += "<li>Inside the container for &quotUpcoming Traversals&quot, create and insert an ordered list which corresponds to this one.</li>"
    tasks += "<li>Make all <code>sad</code> classes into <code>happy</code> ones.</li>";
    tasks += "<li>Make the annoying popup link point instead to <code>http://www.cashcats.biz.</code></li>";
    tasks += "<li>Change the positioning of the annoying popup so it is on the right side of the screen (it's okay to use direct CSS here). Make it 30 pixels lower than its current position by utilizing its current <code>top</code> value.</li>";
    tasks += "<li>Replace the ellipsis <code>...</code> in one of the suggested topics with content of your choice -- but do so by traversing from a different element.</li>";
    tasks += "<li>Replace the form input with a <code>&lttextarea&gt</code> instead of a <code>&ltinput type=&quottext&quot&gt.</li>";
    tasks += "</ol>";

$(".info-box").append(tasks);

// Change sad classes to happy

$(".sad").addClass("happy");
$(".sad").removeClass("sad");

// Change annoying popup link
$("#annoying-popup a").attr('href', 'http://www.cashcats.biz');
$("#annoying-popup a").text("http://www.cashcats.biz");

// Change annoying popup location
var popupTop = parseInt($("#annoying-popup").css('top'));
    popupTop += 30;
    popupTop += "px";

$("#annoying-popup")
    .css('top', popupTop)
    .css('right', '0px');

// change ... to text
var $listItems = $("ul").children();
$listItems.each(function(index, element){
  if ($(element).text() === '...') {$(element).text("This is my exciting new topic")};
  });

// replace form input
var $inputField = $('input[type="text"]');
$inputField.after('<textarea name="comment">Enter text here...</textarea>');
$inputField.remove()
});
