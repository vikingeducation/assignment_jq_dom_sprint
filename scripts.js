$(document).ready(function () {
    /* Task 1. */
    $("h1").text("Something cheeky");
    
    /*Task 2 */
    var $traversalList = $("<ol></ol>");
    $traversalList.append($("<li>Change the \<h1\> to something cheeky</li>"));
    $traversalList.append($("<li>Inside the container for \"Upcoming Traversals\", create and insert an ordered list which corresponds to this one.</li>"));
    $traversalList.append($("<li>Make all sad classes into happy ones.</li>"));
    $traversalList.append($("<li>Make the annoying popup link point instead to http://www.cashcats.biz.</li>"));
    $traversalList.append($("<li>Change the positioning of the annoying popup so it is on the right side of the screen (it's okay to use direct CSS here). Make it 30 pixels lower than its current position by utilizing its current top value.</li>"));
    $traversalList.append($("<li>Replace the ellipsis ... in one of the suggested topics with content of your choice -- but do so by traversing from a different element.</li>"));
    $traversalList.append($("<li>Replace the form input with a \<textarea\> instead of a \<input type=\"text\"\>.</li>"));
    $(".info-box").append($traversalList);
});