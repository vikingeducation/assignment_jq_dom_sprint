$(document).ready( function(){
  //1
  $('h1').text('BIG TITLE');
  //2
  let $newList = $('<ol><li>sad to happy</li><li>popup</li><li>top</li></ol>')
  $('.info-box').append($newList);
  //3
  $('.sad').removeClass("sad")
    .addClass("happy");
  //4
  $('#annoying-popup a').attr('href', 'http://www.cashcats.biz');
  //5
  $('#annoying-popup').css({
    'left': '85%',
    'top': '30px',
  })
  //6
  $('.suggested-topics li:nth-last-child(2)').replaceWith('<li>newtopic</li>');
  //7
  let $form = $('input').first();
  $($form).replaceWith('<textarea></textarea><br>');
})
