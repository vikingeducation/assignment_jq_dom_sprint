(function($) {
  $(document).ready(function() {
    // Task 1
    $("h1").text("I can JS too!");

    // Task 2
    const CASH_CATS_URL = "http://www.cashcats.biz";
    var items = "";
    var tasks = [
      "Change the <h1> to something cheeky",
      "Inside the container for \"Upcoming Traversals\", create and insert an ordered list which corresponds to this one.",
      "Make all sad classes into happy ones.",
      "Make the annoying popup link point instead to " + CASH_CATS_URL + ".",
      "Change the positioning of the annoying popup so it is on the right side of the screen (it's okay to use direct CSS here). Make it 30 pixels lower than its current position by utilizing its current top value.",
      "Replace the ellipsis ... in one of the suggested topics with content of your choice -- but do so by traversing from a different element.",
      "Replace the form input with a <textarea> instead of a <input type=\"text\">."
    ]
    var htmlEntities = function(str) {
      return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
    };
    for (var i = 0; i < tasks.length; i++) {
      items += "<li>" + i + ". " + htmlEntities(tasks[i]) + "</li>";
    }
    $(".info-box.sad").append("<ul>" + items + "</ul>");

    // Task 3
    $(".sad").toggleClass("sad happy");

    // Task 4
    $("#annoying-popup a").attr("href", CASH_CATS_URL);

    // Task 5
    $("#annoying-popup").css("right", 0).css("top", parseInt($("#annoying-popup").css("top")) + 30);

    // Task 6
    $(".suggested-topics li").filter(function(index, element) {
      return $(element).text().indexOf("...") > -1;
    }).text("I found the one with ellipsis! ...");

    // Task 7
    $("input[type='text']", ".input-form").remove();
    $("input", ".input-form").before($("<textarea placeholder='Tell me a story!'></textarea>"));
  });
})(jQuery);
