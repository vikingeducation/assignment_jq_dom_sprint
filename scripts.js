// first change to h1
$( "h1" ).text("something cheeky");


// create unordered list to insert in info-box
$travOl = $("<ol></ol>")
  .css('text-align', 'center')
  .css('list-style-position', 'inside');

// insert trav items in the ol
for(var i = 1; i < 4; i++){
  $travItem = $("<li></li>")
    .css('text-align', 'center')
    .text("Trav Item " + i);

  $travOl.append($travItem);
}

// Insert ol in the info-box container
$( ".info-box").append($travOl);

// make sad classes happy ones
$( '.sad')
  .addClass( 'happy')
  .removeClass( 'sad');

// Make the annoying popup link point to http://www.cashcats.biz
$( 'a', '#annoying-popup')
  .attr('href', 'http://www.cashcats.biz');


// change pos of popup so on right side or screen. 30 px lower
$('#annoying-popup')
  .css('top', '30px')
  .css('right', '20px');

// replace elippsis with my own topic

$textChange = $('.super-duper')
  .next()
  .next()
  .next();

$textChange.text("Nosey Notions");

// Change form input with <textarea> instead of <input type ="text">
$('input[type="text"]')
  .replaceWith("<textarea>");
