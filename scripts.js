
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

});
