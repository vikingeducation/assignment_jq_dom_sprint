$(document).ready( function(){
  $( 'h1' ).first().html("Tough as Nails");

  $( '.info-box' ).append( '<ol id="changes"></ol>' );
  $( '#changes' )
      .append( '<li>Change the &lt;h1&gt; to something cheeky</li>' )
      .append( '<li>Inside the container for "Upcoming Traversals", create and insert an ordered list which corresponds to this one.</li>')
      .append( '<li>Make all sad classes into happy ones.</li>' )
      .append( '<li>Make the annoying popup link point instead to http://www.cashcats.biz</li>' )
      .append( "<li>Change the positioning of the annoying popup so it is on the right side of the screen (it's okay to use direct CSS here). Make it 30 pixels lower than its current position by utilizing its current top value.</li>" )
      .append( '<li>Replace the ellipsis ... in one of the suggested topics with content of your choice -- but do so by traversing from a different element.</li>' )
      .append( '<li>Replace the form input with a &lt;textarea&gt; instead of a &lt;input type="text"&gt;.</li>' );

  $( '.sad' )
      .addClass( 'happy' )
      .removeClass( 'sad' );

  $blinky = $( '#annoying-popup' );
  $blinky.children( 'a' )
      .attr( 'href', "http://www.cashcats.biz" );
  var newTop = ($blinky.position().top + 30) + "px"
  $blinky.css({ 'top': newTop, 'right': '0px' });

  $( 'li' ).last().prev().html('Ridiculous replacements');

  $textBox = $( 'input[type="text"]' );
  $textBox.replaceWith( '<textarea></textarea>');
});
