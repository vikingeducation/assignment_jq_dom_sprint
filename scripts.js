$(document).ready(function(){

  // Change the <h1> to something cheeky
  $( 'header h1' ).text('something cheekier than that');

  // Inside the container for 'Upcoming Traversals', create and insert an ordered list of upcoming traversals.
  var $newOl = $('<ol></ol>');
  $( '.info-box.sad' ).append($newOl);

  var $items = [
    'Change the <h1> to something cheeky',
    'Inside the container for "Upcoming Traversals", create and insert an ordered list which corresponds to this one.',
    'Make all sad classes into happy ones.',
    'Make the annoying popup link point instead to http://www.cashcats.biz.',
    "Change the positioning of the annoying popup so it is on the right side of the screen (it's okay to use direct CSS here). Make it 30 pixels lower than its current position by utilizing its current top value.",
    'Replace the ellipsis ... in one of the suggested topics with content of your choice -- but do so by traversing from a different element.',
    'Replace the form input with a <textarea> instead of a <input type="text">.'
  ];

  // $items.forEach(function(item){
  //   $( '.info-box ol' ).append($('<li>'+item+'</li>'));
  // });

  $.each($items, function(index, element){
    var $li = $('<li></li>');
    $li.text(element);
    $newOl.append($li);
  })


  // Make all sad classes into happy ones.
  $( '.sad' ).addClass('happy');
  $( '.happy' ).removeClass( 'sad' );


  // Make the annoying popup link point instead to http://www.cashcats.biz.
  $('#annoying-popup a').attr('href','http://www.cashcats.biz');


  // Change the positioning of the annoying popup so it is on the right side of the screen (it's okay to use direct CSS here). Make it 30 pixels lower than its current position by utilizing its current top value.

  $('#annoying-popup')
    .css({
      "right": 0,
      "top": "+=30px"
    }
  );


  // Replace the ellipsis ... in one of the suggested topics with the content of your choice -- but do so by traversing from a different element.
  var $child = $( ".suggested-topics ul li:contains('...')");
  $child.text('CONTENT OF MY CHOICE');


  // Replace the form input with a <textarea> instead of a <input type='text'>.
  var $inputField = $( '.input-form form input[type="text"]' );
  var $textarea = $( '<textarea></textarea>' )
    .attr('form', 'uh-oh')
    .attr('placeholder', $inputField.attr('placeholder'));

  $( '.input-form form' ).prepend($textarea);

  $inputField.remove();

})
