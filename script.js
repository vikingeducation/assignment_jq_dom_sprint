$(function() {
   $('h1').html("Tackle and Matriculate");
   $("h4").append('<ol><li>Change h1</li><li>Insert Ordered List</li><li>Make Sad Classes Happy</li><li>Change Annoying Popup Link</li><li>Move Popup Link</li><Replace Ellipsis</li><li>Replace Form Input</li></ol>');
   $('.sad').removeClass('sad').addClass('happy');
   $("a").attr("href", "http://www.cashcats.biz");
   $('#annoying-popup').css('top', parseInt($('#annoying-popup').css('top'), 10) + 30);
});
