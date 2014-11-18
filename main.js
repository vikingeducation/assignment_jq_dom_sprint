$(document).ready( function(){

// Change the <h1> to something cheeky
$('h1').text('Something Cheeky');

// Inside the container for "Upcoming Traversals", create and insert an ordered list which corresponds to this one.

var $classTarget = $('.info-box');
if ( $classTarget.length )
  {
    $classTarget.append( '<ol class="assignment"></ol>' );
    var $newOL = $('ol.assignment');
    // $newOL.css('text-align', 'right');
    console.log( 'TODO: Indent list items to h4 like h3\'s list items are doing for `Suggested Topics`' );
    $newOL.append("<li>Change the h1 to something cheeky</li>");
    $newOL.append("<li>Inside the container for 'Upcoming Traversals', create and insert an ordered list which corresponds to this one.</li>");
    $newOL.append("<li>Make all sad classes into happy ones.</li>");
    $newOL.append("<li>Make the annoying popup link point instead to http://www.cashcats.biz.</li>");
    $newOL.append("<li>Change the positioning of the annoying popup so it is on the right side of the screen (it's okay to use direct CSS here). Make it 30 pixels lower than its current position by utilizing its current top value.</li>");
    $newOL.append("<li>Replace the ellipsis ... in one of the suggested topics with content of your choice -- but do so by traversing from a different element.</li>");
    $newOL.append("<li>Replace the form input with a &lt;textarea&gt; instead of a &lt;input type='text'&gt;.</li>");
    console.log($classTarget);
  }

// Make all sad classes into happy ones.

// ---------- VERBOSE
// $sadClasses = $(".sad");
// $sadClasses
//   .addClass('happy')
//   .removeClass('sad');
// console.log($sadClasses);

// ---------- SHORTER
$(".sad")
  .addClass('happy')
  .removeClass('sad');

// Make the annoying popup link point instead to http://www.cashcats.biz.

// $blinkLink = $( '#annoying-popup' ); // this didn't work, I'll figure it out later
// $someChild = $blinkLink.has( 'a' ).first();
// console.log($blinkLink);
// console.log($someChild);
// $someChild.attr('href', 'http://www.cashcats.biz');
// console.log($someChild);
// console.log( $('#annoying-popup') );

$('#annoying-popup a').attr('href', 'http://www.cashcats.biz'); // this works

// Change the positioning of the annoying popup so it is on the right side of the screen (it's okay to use direct CSS here).
$('#annoying-popup')
.css( 'right', '0' )
// Make it 30 pixels lower than its current position by utilizing its current top value.
.css('top', function(i, val) {
  return ( parseInt( val, 10 ) + 30 ) + 'px'; } );

console.log( $('#annoying-popup') );

// Replace the ellipsis ... in one of the suggested topics with content of your choice -- but do so by traversing from a different element.

// ---------- SHORT AND COMPOUNDED
// $('.suggested-topics ul li').last().prev().replaceWith('<li>Next to last replacement text</li>' );

// ---------- LONG AND VERBOSE
var replacementValue = '<li>Next to last replacement text</li>';
$classTarget = $('.suggested-topics ul li');
if ( $classTarget.length ) {
  var $childTarget = $classTarget.last().prev(); // fetch the next to last child...
  if ( $childTarget.length ) {
    $childTarget.replaceWith( replacementValue ); // ...and replace its value
  }
}

// Replace the form input with a <textarea> instead of a <input type="text">.
$('input[type="text"]').replaceWith("<textarea></textarea>");

});
