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
    $('#annoying-popup')
      .css('right', '10px')
      .css('top', function(i, value) {
        return (parseInt(value) + 30) + 'px';
      });

    // Add topic
    $topics =  $('.suggested-topics');
    $list = $topics.children('ul');
    $lastItem = $list
                  .children()
                  .last();
    $ourItem = $lastItem.prev();
    $ourItem.text('Winsome wildernesses');
  }
);
