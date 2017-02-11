$(document).ready(function () {
    /* Task 1. */
    $("h1").text("Something cheeky");
    
    /*Task 2 */
    var $traversalList = $("<ol></ol>");
    $traversalList.append($("<li>Change the &#60;h1&#62; to something cheeky</li>"));
    $traversalList.append($("<li>Inside the container for &quot;Upcoming Traversals&quot;, create and insert an ordered list which corresponds to this one.</li>"));
    $traversalList.append($("<li>Make all sad classes into happy ones.</li>"));
    $traversalList.append($("<li>Make the annoying popup link point instead to http://www.cashcats.biz.</li>"));
    $traversalList.append($("<li>Change the positioning of the annoying popup so it is on the right side of the screen (it's okay to use direct CSS here). Make it 30 pixels lower than its current position by utilizing its current top value.</li>"));
    $traversalList.append($("<li>Replace the ellipsis ... in one of the suggested topics with content of your choice -- but do so by traversing from a different element.</li>"));
    $traversalList.append($("<li>Replace the form input with a &#60;textarea&#62; instead of a &#60;input type=&quot;text&quot;&#62;.</li>"));
    $(".info-box").append($traversalList);
    
    
    /*Task 3*/
    $('[class*="sad"')
        .removeClass("sad")
        .addClass("happy");
        
    /*Task 4*/
    $("#annoying-popup > a")
        .first()
        .attr("href", "http://www.cashcats.biz");
        
    /*Task 5*/
    var $annoyingPopup = $("#annoying-popup");
    var topVal = $annoyingPopup
        .css("top"); //get value of top
    $annoyingPopup.css("top", (parseInt(topVal) + 30));
    $annoyingPopup.css("right", 0); //Move to right side of page
    
    /*Task 6*/
    $("ul")
        .children()
        .eq(6)
        .text("HTML and CSS are tedious");
        
    /*Task 7*/
    var $oldTextInput = $('.input-form input[type="text"]');
    var $newTextArea = $("<textarea></textarea>")
        .attr("placeholder", $oldTextInput.attr("placeholder"))
        .attr("name", "user-story");
    $oldTextInput.replaceWith($newTextArea);
});