$( document ).ready( function(){

  $('h1').first().text("Hello, world!");

  $('.info-box').append('<ol></ol>');
  $('.info-box ol')
    .append('<li>Change the &lt;h1&gt; to something cheeky</li>')
    .append('<li>Inside the container for "Upcoming Traversals", create and insert an ordered list which corresponds to this one.</li>')
    .append('<li>Make all sad classes into happy ones</li>')
    .append('<li>Make the annoying popup link point instead to http://www.cashcats.biz</li>')
    .append('<li>Change the positioning of the annoying popup so it is on the right side of the screen. Make it 30 pixels lower than its current position by utilizing its current top value</li>')
    .append('<li>Replace the ellipsis in one of the suggested topics with content of your choice, but do so by traversing from a different element</li>')
    .append('<li>Replace the form input with a textarea instead of an input type text</li>');


  $( 'sad' )
    .addClass( 'happy' )
    .removeClass( 'sad' );
  $('.blink a').attr('href','http://www.cashcats.biz');

  $( '#annoying-popup' ).css({
    'top': '30px',
    'right': '10px'
  });

  $('.suggested-topics ul li').last().prev().html('Hello everyone');

  $('.input-form input').first().replaceWith('<textarea>');
});