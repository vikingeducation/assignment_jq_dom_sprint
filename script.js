(function($) {
  $(document).ready(function() {

    // 1
    $('header h1').html('Something Cheeky');

    // 2
    var $ol = $('<ol></ol>');
    $('.info-box.sad').append($ol);
    $.each([
      'Change the <h1> to something cheeky',
      'Inside the container for "Upcoming Traversals", create and insert an ordered list which corresponds to this one.',
      'Make all sad classes into happy ones.',
      'Make the annoying popup link point instead to http://www.cashcats.biz.',
      "Change the positioning of the annoying popup so it is on the right side of the screen (it's okay to use direct CSS here). Make it 30 pixels lower than its current position by utilizing its current top value.",
      'Replace the ellipsis ... in one of the suggested topics with content of your choice -- but do so by traversing from a different element.',
      'Replace the form input with a <textarea> instead of a <input type="text">.'
    ], function(index, element) {
      var $li = $('<li></li>');
      $li.text(element);
      $ol.append($li);
    });

    // 3
    $('.sad').removeClass('sad').addClass('happy');

    // 4
    $('#annoying-popup a').attr('href', 'http://www.cashcats.biz');

    // 5
    $('#annoying-popup').css({
      "right": 0,
      "top": "+=30px"
    });

    // 6
    $('.suggested-topics ul li:contains("...")')
      .text('Content of my choice!!! Bam!')
      .css('text-decoration', 'underline');

    // 7
    var $input = $('.input-form input[type=text]');
    var placeholder = $input.attr('placeholder');
    $('.input-form input[type=text]').remove();
    var $textarea = $('<textarea></textarea>')
      .attr('placeholder', placeholder);
    $('.input-form form').prepend($textarea);

    // 8 Just for fun...
    var colors = [
      'red',
      'orange',
      'yellow',
      'green',
      'blue',
      'purple',
      'violet'
    ];
    var $rainbow = $('<div class="rainbow"></div>');

    setInterval(function() {
      $rainbow.html('');
      var last = colors.pop();
      colors.unshift(last);
      $.each(colors, function(index, color) {
        var $div = $('<div>')
          .css({
            height: '10px',
            background: color
          });
        $rainbow.append($div);
      });
    }, 250);
    $('#rainbow').html($rainbow);


  });
})($);





