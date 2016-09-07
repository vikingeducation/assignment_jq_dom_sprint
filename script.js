$(document).ready(
  // #1
  // change h1
  function() { 
    $("h1").html("DAVID DOESN'T REALLY LIKE POKEMON.");
  //# 2 put ordered list into upcoming traversals
  //grab the list from suggest topics
  //clone the list
  //create an empty ol element
  // add each li element into the empty ol
  // append the ol to upcoming traversal
    var $list = $('.suggested-topics ul li').clone();
    var $newList = $('<ol></ol>');
    $list.each(function(){
      $newList.append(this);
    })
    $('.info-box').append($newList);

  //# 3 make all sad classes into happy ones
    var $sads = $('.sad');
    $sads.addClass('happy');
    $sads.removeClass('sad');
  }
);




