$( document ).ready(function(){
  // 1: Change h1 to something cheeky
  $('h1').html('Shake your BumBum');


  // 2: Inside the container for Upcoming Traversals
  // create and insert an ordered lists of upcoming traversals
  $('.info-box').append('<ol></ol>');
  $('.info-box ol').append('<li>Make All Sad Classes into happy ones</li>')
                    .append('<li>Change the popup link</li>')
                    .append('<li>Change the popup positioning</li>')
                    .append('<li>Replace the ellipsis</li>');

  // 3: Make all sad classes into happy ones
  $('.sad')
    .removeClass('sad')
    .addClass('happy');

  // 4: Make the annoying popup link point instead to
  // http://www.cashcats.biz
  let popupLink = $('#annoying-popup a')
  popupLink.attr('href', 'http://www.cashcats.biz');

  // 5: Change the positioning of the annoying popup so it is on the 
  // right side of the screen (it's okay to use direct CSS here). 
  // Make it 30 pixels lower than its current position by utilizing its current top value.

  // 6: Replace the ellipsis ... in one of the suggested topics with content of your choice 
  // -- but do so by traversing from a different element.;
  let topicToChange = $('.suggested-topics ul li').last().prev();
  topicToChange.html('Toggles');
});