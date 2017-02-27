$(document).ready(function() {

     //1. Change the <h1> to something cheeky
     $('h1').text("Changed to Something Cheeky!");
     //2. Inside the container for "Upcoming Traversals", create and insert an ordered list which corresponds to this one.
     $('h4').append("<ol><li>Change the h1 to something cheeky</li><li>Inside the container for \"Upcoming Traversals\", create and insert an ordered list which corresponds to this one.</li><li>Make all sad classes into happy ones.</li><li>Make the annoying popup link point instead to http://www.cashcats.biz.</li><li>Change the positioning of the annoying popup so it is on the right side of the screen (it's okay to use direct CSS here). Make it 30 pixels lower than its current position by utilizing its current top value.</li><li>Replace the ellipsis ... in one of the suggested topics with content of your choice -- but do so by traversing from a different element.</li><li>Replace the form input with a [textarea] instead of a [input type=\"text\"].</li></ol>");
     //3. Make all sad classes into happy ones.
     // $('.sad').addClass('happy');
     // $('.sad').removeClass('sad');
     $('.sad').addClass('happy').removeClass('sad');
     //4. Make the annoying popup link point instead to http://www.cashcats.biz.
     $("#annoying-popup a").attr("href","http://www.cashcats.biz");
     //5. Change the positioning of the annoying popup so it is on the right side of the screen (it's okay to use direct CSS here). Make it 30 pixels lower than its current position by utilizing its current top value.
     $("#annoying-popup").css("top", "+=30px");
     //6. Replace the ellipsis ... in one of the suggested topics with content of your choice -- but do so by traversing from a different element.
     $(".suggested-topics li:contains('...')").text("Suggested topic of my choice");
     //7. Replace the form input with a <textarea> instead of a <input type="text">.
     $(".input-form form input[type=text]").replaceWith("<textarea></textarea>");

});