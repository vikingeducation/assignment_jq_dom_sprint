$(document).ready(function(){

  // Change heading
  $("h1").html("Something Cheeky");

  // Add list below Upcoming Traversals
  $first = $("h4");
  $newLiArr = [];
  $newLiArr.push($('<li> This is new 1! </li>'));
  $newLiArr.push($('<li> This is new 2! </li>'));
  $newLiArr.push($('<li> This is new 3! </li>'));
  $newLiArr.push($('<li> This is new 4! </li>'));

  for(var i=0; i < $newLiArr.length; i++) {
    $newLiArr[i].insertAfter($first);
  }

  // Convert class of items from sad to happy
  var $sadItems = $('.sad');
  $sadItems.removeClass('sad');
  $sadItems.addClass('happy');

  // Change link of flash msg
  var $link = $('#annoying-popup a');
  $link.attr('href', 'http://www.cashcats.biz');

  // Change position of flash msg
  var $popUp = $('#annoying-popup');
  $popUp.css({'left': '80%', "top": "30px" });

  // Change 7th element in list
  $div = $(".suggested-topics");
  $targetList = $div.children().first().next();
  $target = $targetList.children().eq(6);
  $target.html("CHANGED!");

  // Change form input element
  $form = $('form');
  $targetTextArea = $form.children().eq(0);
  $targetTextArea.replaceWith('<textarea>');

});