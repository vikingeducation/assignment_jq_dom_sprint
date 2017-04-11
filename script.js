const setTitle = value => {
  $('h1').html(value);
}

const setTraversalsList = list => {
  const $traversalsList =
    $('<ol/>')
      .addClass('.traversals-list')
      .css('width', '10%')
      .css('margin', '0 auto')
      .css('text-align', 'center')

  list.forEach(traversal => {
    $traversalsList.append(
      $('<li/>')
        .addClass('.traversals-list__item')
        .text(traversal)
    );
  });

  $('.info-box').append($traversalsList);
}

const stopSadness = newEmotion => {
  $('.sad').attr('class', newEmotion);
}

const updatePopupLink = newLink => {
  $('#annoying-popup').children('a').first().attr('href', newLink);
}

const movePopup = () => {
  const topPostion = $('#annoying-popup').css('top');
  const newTopPostion = parseInt(topPostion) + 30;

  $('#annoying-popup')
    .css('right', '0')
    .css('top', `${newTopPostion}px`);
}

const updateEllipsis = copy => {
  const $targetLi =
    $('.suggested-topics')
      .find('li')
      .filter((index, element) => {
        return $(element).text() === '...';
      })
      .first();

  $targetLi.text(copy);
}

const updateTextInput = () => {
  $('.input-form')
    .find("input[type='text']")
    .replaceWith($('<textarea/>'));
}

$(document).ready(function() {
  setTitle('Potato Salad');
  setTraversalsList(['test', 'test2', 'test3', 'test4']);
  stopSadness('happy');
  updatePopupLink('http://www.cashcats.biz');
  movePopup();
  updateEllipsis('ooooooooooooo');
  updateTextInput();
});
