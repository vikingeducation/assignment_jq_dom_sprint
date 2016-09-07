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

  //# 4 change annoying link to another annoying link thnx kit
    $(".blink a").attr("href", "http://www.cashcats.biz");

  //# 5 make annoying link 30 pixels lower and to the right.
    $(".blink").css("top", "40px").css("right", "0px");

  //# 6 Replace the ellipsis ... by traversing from different element
    $(".info-box ol li:nth-child(7)").html("adrian is pretty damn cool COOOL COOL");

  //#7 Replace form input with textArea
    $(".input-form input").first().replaceWith($("<textarea></textarea>"))
  }

  

  
  
);




