function changeH1() {
  $('h1').html("Ugh")
};

function insertList() {
  var $orderedList = $('<ol>');
  var $listItem1 = $('<li>').text("H1").appendTo($orderedList);
  var $listItem2 = $('<li>').text("insert list").insertAfter($listItem1);
  var $listItem3 = $('<li>').text("make sad classes happy").insertAfter($listItem2);
  $('div.info-box').append($orderedList);
}
function happySad() {
  $('.sad').addClass('happy');
  $('.sad').removeClass('sad');
}
function changePop() {
  $('a[href="http://www.evilwebsite.com"]').attr('href', 'http://www.cashcats.biz');
}
function movePop(){
  $('div#annoying-popup').css('top', function (i, val) {
    var newTop = parseInt(val) + 30;
    return newTop + "px";
  })
}
function replaceEli() {
  $('li').last().prev().text('pingpong');
}
function replaceInput() {
  $('input[type="text"]').replaceWith(function() {
    return $("<textarea />", {html: $(this).html()});
  });
}
$(document).ready( function(){
  changeH1();
  insertList();
  happySad();
  changePop();
  movePop();
  replaceEli();
  replaceInput();
})
