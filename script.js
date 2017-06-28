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
  }

);
