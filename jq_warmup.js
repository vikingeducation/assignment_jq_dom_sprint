
$( document ).ready(function() {

// Change the <h1> to something cheeky
  $( "h1" ).html( "Something Cheeky" );

/* Inside the container for "Upcoming Traversals", create and insert an
ordered list of upcoming traversals.*/
  var $box = $( ".info-box" );
  $box.css( "text-align", "center" )
  $box.append("<ol>");
  $box.append("<li> H1 changed to something cheeky");
  $box.append("</li>");
  $box.append("<li> Sad classes become happy");
  $box.append("</li>");
  $box.append("<li> Popup stops linking to evil, and instead links to cats");
  $box.append("</li>");
  $box.append("<li> Second to last suggested topic becomes quality queries");
  $box.append("</li>");
  $box.append("<li> Form input changed to textarea, replacing text input");
  $box.append("</li>");
  $box.append("</ol>");

// Make all sad classes into happy ones.
  $( ".sad" ).attr( "class", "happy" );

// Make the annoying popup link point instead to http://www.cashcats.biz.
  $( "a[href='http://www.evilwebsite.com']" ).attr( "href", "http://www.cashcats.biz" );

/* Change the positioning of the annoying popup so it is on the right side of
the screen (it's okay to use direct CSS here). Make it 30 pixels lower than
its current position by utilizing its current top value. */
  $( "#annoying-popup" ).css( { "top": "40px", "margin-left": "calc(100% - 231px)" } );

/*Replace the ellipsis ... in one of the suggested topics with the content of
your choice -- but do so by traversing from a different element. */
  var $listItem = $( "ul li:nth-child(7)" );
  $listItem.html( "Quality queries" );

/* Replace the form input with a <textarea> instead of a <input type="text">. */
  var $text = $( "input" ).first();
  $text.replaceWith( "<textarea></textarea>" );

});
