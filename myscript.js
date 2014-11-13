$( document ).ready(function() {
  $("h1").text("Complete");

  $('.info-box').append('<ol class="assignment-list"></ol>');
  var $assignmentList = $('ol.assignment-list');

  $assignmentList.append("<li>Change the &lt;h1&gt; to something cheeky</li>");
  $assignmentList.append("<li>Inside the container for 'Upcoming Traversals', create and insert an ordered list which corresponds to this one.</li>");
  $assignmentList.append("<li>Make all sad classes into happy ones.</li>");
  $assignmentList.append("<li>Make the annoying popup link point instead to http://www.cashcats.biz.</li>");
  $assignmentList.append("<li>Change the positioning of the annoying popup so it is on the right side of the screen (it's okay to use direct CSS here). Make it 30 pixels lower than its current position by utilizing its current top value.</li>");
  $assignmentList.append("<li>Replace the ellipsis ... in one of the suggested topics with content of your choice -- but do so by traversing from a different element.</li>");
  $assignmentList.append("<li>Replace the form input with a &lt;textarea&gt; instead of a &lt;input type='text'&gt;.</li>");

  var $sadClasses = $(".sad");
  $sadClasses.addClass("happy");
  $sadClasses.removeClass("sad");

  $('a, #annoying-popup').attr( 'href', "http://www.cashcats.biz");

  $('#annoying-popup')
    .css( 'right', '0' )
    .css( 'top', function(index, currentTop){
      var newTop = parseInt(currentTop) + 30; // what's wrong?
      return newTop + "px";
    } );

  var lastListItem = $('ul').children().last();

  $(lastListItem.prev()).text("So easy!");

  $('input[type="text"]').replaceWith("<textarea></textarea>");

});