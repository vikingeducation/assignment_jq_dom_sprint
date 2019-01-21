// 1. Change the <h1> to something cheeky
var $header = $('h1').first();
$header.text('next');

// 2. Inside the container for "Upcoming Traversals",
// create and insert an ordered list of upcoming traversals.

// 3. Make all sad classes into happy ones.
var $sadClasses = $('sad');
$( 'p' ).each(function( index, element ) {

  // element is the naked DOM element
  // so we need to manually turn it into
  // a jQuery object by passing it into the
  // `$` function
  $( element ).addClass("lets-boogie");

});

// 4. Make the annoying popup link point instead to http://www.cashcats.biz.

// 5. Change the positioning of the annoying popup so it is on the right
// side of the screen (it's okay to use direct CSS here).
// Make it 30 pixels lower than its current position by utilizing
// its current top value.

// 6. Replace the ellipsis ... in one of the suggested topics
// with the content of your choice -- but do so by traversing
// from a different element.

// 7. Replace the form input with a <textarea> instead of a <input type="text">.
