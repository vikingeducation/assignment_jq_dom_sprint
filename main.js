$(document).ready(function() {
  //Changing h1 text to "Something Cheeky"
  $("h1").text("Something Cheeky");

  //Adding list of Upcoming traversals
  $("\
    <div class= wrapper>\
      <ol>\
        <li>Turning sad classes into happy ones</li>\
        <li>Make the popup point to cashcats</li>\
        <li>Change popup positioning</li>\
        <li>Replace the ellipsis</li>\
        <li>Change &lt;input type= &quot;text&quot;&gt; to &lttextarea&gt;</li>\
      </ol>\
    </div>\
  ").insertAfter($("h4"));

  //Change ugly style of above list
  $('.wrapper').css({
    'text-align': 'center',
    'list-style-position': 'inside'
  });

  $('.wrapper ol').css({
  'display': 'inline-block',
  'text-align': 'left',
  'color': '#333333'
  });

  //Make sad classes happy
  $('.sad').removeClass('sad').addClass('happy');

  //Redirecting popup to cashcats
  $('a').attr("href", "http://www.cashcats.biz")

  //Change pop-up position
  $('#annoying-popup').css({
    'top': '30px'
  });

  //Replace the ellipsis
  $(".super-duper").next().next().next().text("Eliminating Ellipsis");

  //change input type
  $('input[type="text"]').replaceWith($('<textarea rows="10" cols="50"></textarea>'));

  //Prevent textarea resizing
  $('textarea').css({
  'resize':'none'
  });
});
