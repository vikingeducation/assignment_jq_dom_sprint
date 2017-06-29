$(
  function() {
    // Update the headline
    $('h1').text("Six pints of bitter... the world's about to end.");

    // List traversals
    $('div.info-box')
      .append( $('<ol>')
        .append( $.map(
          ['Mount Everest', 'The Great Wall of China', 'The Gobi Desert'],
          function(traversal) {
            return $('<li>').text(traversal)
          }
        ) )
      );

    // Happy Happy
    $('.sad')
      .removeClass('sad')
      .addClass('happy');

    // Cats replace evil
    $('#annoying-popup a')
      .attr('href', 'http://www.cashcats.biz');

    // Move popup
    $('#annoying-popup').css({
      'right': '10px',
      'top': '+=30px'
    });

    // Add topic
    $('.suggested-topics ul')
      .children('li:contains("...")')
      .text('Winsome wildernesses');

    // Replace input
    $original = $('input[type="text"]')
    $replacement = $('<textarea>').attr(
      'placeholder', $original.attr('placeholder')
    )
    $original.replaceWith($replacement);
  }
);
