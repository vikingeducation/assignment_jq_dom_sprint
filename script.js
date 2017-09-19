$(document).ready(function(){
  $("h1").html("cheeky cheeky");
  $(".sad").attr('class', 'happy');
  $("#annoying-popup a").attr('href', 'http://www.cashcats.biz');
  var $toppx = $('#annoying-popup').css("top")
  $('#annoying-popup').css({
    "right": "10px",
    "top": "40px"
  });
  var $listItem = $( 'li' ).first();
  var $list = $listItem.parent();
  var $allListItems = $list.find( 'li' );
  $($allListItems[6]).html("CHANGED!");
  var $firstinput = $('input').first();
  $firstinput.replaceWith('<textarea>');
})
