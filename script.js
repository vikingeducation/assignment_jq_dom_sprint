// Change the <h1> to something cheeky
let h1 = $("h1");
h1.text("Lasagna");
// Inside the container for "Upcoming Traversals", create and insert an ordered list of upcoming traversals.
let traversals = $(".info-box");
let ol = $("<ol></ol>");
traversals.append(ol);
ol.append("<li>What is a traversals list even?</li>");
ol.append("<li>I was instructed to add some items</li>");
ol.append("<li>Here's another one</li>");
// Make all sad classes into happy ones.
let sad = $(".sad");
sad.addClass("happy");
sad.removeClass("sad");
// Make the annoying popup link point instead to http://www.cashcats.biz.
let annoying = $("#annoying-popup a");
annoying.attr("href", "http://www.cashcats.biz");
// Replace the ellipsis ... in one of the suggested topics with the content of your choice -- but do so by traversing from a different element.
let suggested = $(".suggested-topics ul li");
let ellipsis = suggested.last().prev();
ellipsis.text("Something");
// Replace the form input with a <textarea> instead of a <input type="text">.
let input_list = $("input");
let text_input = input_list.first();
text_input.attr("type", "textarea");