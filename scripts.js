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


  // Make the annoying popup link point instead to http://www.cashcats.biz.
  $('#annoying-popup a').attr('href','http://www.cashcats.biz');


  // Change the positioning of the annoying popup so it is on the right side of the screen (it's okay to use direct CSS here). Make it 30 pixels lower than its current position by utilizing its current top value.
  $currentTop = $( '#annoying-popup' ).css('top').slice(0, -2);
  $newTop = Number($currentTop) + 30 + 'px';

  $( '#annoying-popup' )
    .css({
      'right': '0',
      'top': $newTop,
    }
  );




})
