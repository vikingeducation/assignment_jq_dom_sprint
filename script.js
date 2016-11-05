$(document).ready( function() {
  //1. Changing H1 to H4
  $('h1').html('something cheeky');

  //2. Insert a list
  var list = $('<ol></ol>');
  var listItems = [
        'Change the <h1> to something cheeky',
        'Inside the container for "Upcoming Traversals", create and insert an ordered list which corresponds to this one.',
        'Make all sad classes into happy ones.',
        'Make the annoying popup link point instead to http://www.cashcats.biz.',
        "Change the positioning of the annoying popup so it is on the right side of the screen (it's okay to use direct CSS here). Make it 30 pixels lower than its current position by utilizing its current top value.",
        "Replace the ellipsis ... in one of the suggested topics with content of your choice -- but do so by traversing from a different element.",
        'Replace the form input with a <textarea> instead of a <input type="text">.'
  ]
  $.each(listItems, function(index, element) {
    var li = $('<li></li>');
    li.text(element);
    li.appendTo(list);
  });
  list.css('text-align', 'left');
  $('.info-box h4').append(list);

  //3. Make all sad classes to happy
  $('.sad').removeClass('sad').addClass('happy');

  //4. Change pop-up link
  $('#annoying-popup a').attr('href', 'http://www.cashcats.biz');

  //5. Change pop up position
  $('#annoying-popup').css('right', '10px')
  $('#annoying-popup').css('top', function(i, val) {
    var newVal =  parseInt(val) + 30;
    return newVal + "px";
    }
  );

  //6. Change ... to something else
  $.each($('h3').next().children(), function( index, value ) {
    if (value.innerHTML === "...") value.innerHTML = "Super Duper";
  });

  //7. Replace text with text-area
  var ta = $('<textarea></textarea>').attr('placeholder', 'Tell me a story!')
  $('input[type="text"]').replaceWith(ta)

});
