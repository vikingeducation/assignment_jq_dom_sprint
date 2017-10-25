const upcoming = [
  'Refactoring Rampage',
  'Monad Massacre',
  'Bio-DOM',
  'Thermo-Nuclear BOM',
  'Corruption is THE_ONLY_CONSTANT',
  'All my .children',
  '.append',
  '<strong>const</strong>itutional declarations'
]; // TITLES ARRAY for [UPCOMING TRAVERSALS]

$(document).ready(function() {

  // 1) SOMETHING CHEEKY
  $("h1").text(`Something SUPER Cheeky...`);

  // 2A) APPEND ORDERED LIST to DIV.INFO-BOX
  let $oList = $("<ol class='upcoming'></ol>");
  $(".info-box").append($oList);
  // 2B) ITERATE 'UPCOMING' ARRAY -> POPULATE THE ORDERED LIST
  upcoming.forEach((string, index) => {
    $oList.append(`<li id='${index}'>${string}</li>`);
  });

  // 3) 'SAD' to 'HAPPY'
  $(".sad").toggleClass('sad happy');

  // 4) CHANGE BLINK-LINK DESTINATION
  $(".blink a").attr('href', 'http://www.cashcats.biz');

  // 5) BLINK-LINK CSS POSITION CHANGE
  $(".blink").css({top: '40px', right: '0'});

  // 6) ELLIPSES REPLACEMENT
  $("ul li")
    .last() // target adjacent <li>
    .prev() // traverse to previous <li>
    .text('MY CHOOSIEST CHOICE'); // replaces "..."

  // 7) CHANGE INPUT TYPE
  $("input[type='text']").replaceWith("<textarea>");
});
