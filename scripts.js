
$(document).ready(function(){
  //change the <h1>
  $( 'h1' ).text('Hungry for dank memes');

  //Make list of upcoming tansversals
  $( '.info-box').append(
    "<ul>",
    "<li>Make all sad classes into happy ones.</li>",
    "<li>Make the annoying popup link point instead to ...</li>",
    "<li>Change the positioning of the annoying popup so it is on the right side of the screen</li>",
    "<li>Replace the ellipsis</li>",
    "<li>Replace the form input</li>",
    "</ul>"
  );

  //Make all sad classes into happy ones
  $( '.sad' ).toggleClass("sad happy");

  //Make the annoying popup link point instead to http://www.cashcats.biz
  $( '#annoying-popup a').attr( "href", "http://www.cashcats.biz" );

  //Change the positioning of the annoying popup so it is on the right side of the screen
  $( '#annoying-popup' ).css({
    "right": "10px",
    "top": "40px"
  });

  //replace the ellipsis with my own list item
  var $lists = $( '.suggested-topics ul li');
  $( $lists[6]).text("silly selectors");

  //Replace the form input with a <textarea> instead of a <input type="text">.
  $( 'form input[type="text"]' ).replaceWith("<textarea></textarea>");


  //i did it!
});
