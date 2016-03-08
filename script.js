$(document).ready(function() {
  $('h1').animate({
    fontSize: '100px',
  }, 500, 'swing', function() {
    $('h1').animate({
      fontSize: '30px'
    });
  });

  topics = ['Change the <h1> to something cheeky',
  'Inside the container for "Upcoming Traversals", create and insert an ordered list which corresponds to this one.',
  'Make all sad classes into happy ones.',
  'Make the annoying popup link point instead to http://www.cashcats.biz.',
  'Change the positioning of the annoying popup so it is on the right side of the screen (it\'s okay to use direct CSS here). Make it 30 pixels lower than its current position by utilizing its current top value.',
  'Replace the ellipsis ... in one of the suggested topics with content of your choice -- but do so by traversing from a different element.',
  'Replace the form input with a <textarea> instead of a <input type="text">.'];
  orderedList = $("<ol></ol>");
  for (var i = 0; i < topics.length; ++i) {
    orderedList.append("<li>" + topics[i].replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;') + "</li>");
  }
  $('.info-box').append(orderedList);

  $(".sad").addClass("happy").removeClass("sad");

  $("#annoying-popup a").attr( 'href', "http://www.cashcats.biz");

  $("#annoying-popup").css(
    {
      right: "30px",
      top: "+=10px"
    }
  );

  $(".super-duper.happy").html = "THIS IS SUPER DUPER HAPPY";
});
