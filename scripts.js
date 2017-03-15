$(document).ready(function() {

  $( 'h1' ).text('Something Cheeky');

  // begin populating Upcoming Traversals list from VJS Array 
  var upcomingTravsArray = ["Make all sad classes into happy ones.",
                                 "Make the annoying popup link point instead to http://www.cashcats.biz.",
                                 "Change the positioning of the annoying popup so it is on the right side of the screen (it's okay to use direct CSS here). Make it 30 pixels lower than its current position by utilizing its current top value.",
                                 "Replace the ellipsis ... in one of the suggested topics with content of your choice -- but do so by traversing from a different element.",
                                 "Replace the form input with a <textarea> instead of a <input type='text'>."];
  //Navigate and mark points in the dom 
  var $infoBoxTop = $( '.info-box h4' );
  $( '<ol id="travs-list">' ).insertAfter($infoBoxTop);
  var $travsList = $( '#travs-list' );
  //Use iteration over our array to set values to lists (appending with each iteration)
  $.each(upcomingTravsArray, function(i, el){
                                $( '<li>' ).appendTo($travsList);
                                var $lastLi = $travsList.find( 'li' ).last();
                                $lastLi = $lastLi.text(el);
                                $travsList.append($lastLi);
  });

  $('#annoying-popup a').attr("href", "http://www.cashcats.biz");
  
  var $liChild = $('.suggested-topics ul :nth-child(7)');
  $liChild.text("Something Meaningful");

  $('.input-form form input[type="text"]').replaceWith('<textarea>')
  
});