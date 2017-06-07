const updateHeader = text => {
  $('h1').html(text);
}

const addList = arr => {
  $('h4').append('<ol>');
  for (var i=0; i<arr.length; i++){
    let $li = $('<li>').text(arr[i])
    $('h4 ol').append($li);
  }
}

const happify = () => {
  $('.sad').removeClass('sad').addClass('happy');
}

const updateLink = (target, link) => {
  target.attr('href', link);
}

const updatePopup = () => {
  $('#annoying-popup').css({
    'right': '0',
    'top' : '30px'
  })
}

const updateSuggestedLi = (number, content) => {
  let $toBeUpdated = $('.suggested-topics ul li').eq(number)
  $toBeUpdated.text(content);
}

let $text = $('.input-form input').eq(0);
($text).replaceWith($('<textarea/>'))

$(document).ready(function() {
  updateHeader('CSS sux');
  addList(['test1', 'hope this works', '3']);
  happify();
  updateLink($('#annoying-popup a'), 'http://www.cashcats.biz');
  updatePopup();
  updateSuggestedLi(6, 'Hope this works!')

})
