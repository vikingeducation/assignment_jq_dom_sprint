$(document).ready(function(){

  // Change the <h1> to something cheeky
  $( 'header h1' ).text('something cheekier than that');

  // Inside the container for 'Upcoming Traversals', create and insert an ordered list of upcoming traversals.
  $newOl = $('<ol></ol>');
  $( '.info-box' ).append($newOl);

  items = ['Toggle classes', 'Change text', 'Change positioning', 'Replace HTML elements'];

  items.forEach(function(item){
    $( '.info-box ol' ).append($('<li>'+item+'</li>'));
  });


  // Make all sad classes into happy ones.
  $( '.sad' ).addClass('happy');
  $( '.happy' ).removeClass( 'sad' );




})
