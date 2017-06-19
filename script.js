//script for transversing and manipulating dom

$(document).ready( function() {
  //change the h1 heading
  $h1 = $("h1")[0];
  $h1.textContent = "Something Cheeky";

  //make all the sad classes happy
  $(".sad")
    .removeClass("sad")
    .addClass("happy");

  //have the link send you to somewhere awesome
  var $link = $(".blink a");
  $(".blink a").attr("href", "http://www.cashcats.biz");

    //move popup to the right
  var $ad = $("#annoying-popup");
  $ad.css('right', "10px");
    //move it down 30px
  var ad_top = parseInt($ad.css("top"));
  var string = String(ad_top + 30) + "px";
  $ad.css("top", string);

  //insert a list of upcoming traversals
    //make our list
  var $ol = $("<ol>");
    //make our list item objs
  var list_text = [
    { text : "Going to make sad classes happy."},
    { text : "Make the annoying popup link point instead to http://www.cashcats.biz."},
    { text : "Change the positioning of the annoying popup so it is on the right side of the screen (it's okay to use direct CSS here). Make it 30 pixels lower than its current position by utilizing its current top value." },
    { text : "Replace the ellipsis ... in one of the suggested topics with the content of your choice -- but do so by traversing from a different element." },
    { text : "Replace the form input with a <textarea> instead of a <input type='text'>."}
  ];
    //use the text objs in our new list items and tack them onto our <ol>
  for (i = 0, $li = $(); i < list_text.length; i++){
    $li = $("<li>", list_text[i]);
    $ol.append($li);
  }
    //grab our target / destination for our list
  var $h4 = $(".info-box.happy h4");
    //insert list into the page
  $h4.append($ol);

    //find all the list items
  var $li = $(".suggested-topics")
    .find("ul")
    .children();

    //grab the li that is "..."
  var myFilter = function(index){
    return ("..." === this.innerText);
  }

    //change it's text to
  var blank_item = $li.last().prev();
  $(blank_item).text("Fantastic Filters");

    //make the textarea that will be inserted
  var $new = $("<textarea>", { placeholder : "Tell me a story!"} );
    //replace the old input with the new one
  $(".input-form form")
    .children()
    .first()
    .replaceWith($new);


})
