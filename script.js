$(document).ready(function() {

  // 1.
  $('h1').text('something cheeky');

  // 2.
  $('.info-box').append('<ol>');
  $('ol')
    .append('<li>Make all sad classes into happy ones.</li>')
    .append('<li>Change the annoying popup link.</li>')
    .append('<li>Change the positioning of the annoying popup</li>')
    .append('<li>Replace the ellipsis ... in one of the suggested topics</li>')
    .append('<li>Replace the form input with a textarea</li>');

  // 3.
  $('.sad').addClass('happy');
  $('.happy').removeClass('sad');

  // 4.
  $('#annoying-popup').find('a').attr('href', 'http://www.cashcats.biz');

  // 5.
  $('#annoying-popup').css({'right': '0px', 'top': '+=30px'});

  // 6.
  $('li')
    .last()
    .prev()
    .text('the content of your choice');

  // 7.
  $('form')
    .find('input[type="text"]')
    .replaceWith('<input type="textarea" placeholder="Tell me a story!">');

});
