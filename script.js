$(document).ready(() => {
  //Change the <h1> to something cheeky
  $('h1').html('something cheeky');

  //create ordered list and list items
$list = $('<ol></ol>')
  .append($('<li>Traversal #1 to parent</li>'))
  .append($('<li>Traversal #2 to children</li>'))
  .append($('<li>Traversal #3 to siblings</li>)'));

  //add list to container
  $('h4').parent().append($list);
  //center list
  $('.info-box').css({
    textAlign: 'center',
    listStyle: 'inside'
  });

  //sad classes become happy
  $('.sad').addClass('happy').removeClass('sad');

  //annoying popup link and location changed
  $('#annoying-popup')
    .attr('href', 'http://www.cashcats.biz')
    .css({'top': '30px', 'right': '0'});

  /*Replace the ellipsis ... in one of the suggested topics with the content
  of your choice -- but do so by traversing from a different element.*/
  $('ul').children().last().prev().html('Various variables');

  //Replace the form input with a <textarea> instead of a <input type="text">.
  $('input[type="text"]').replaceWith('<textarea></textarea>');
});
