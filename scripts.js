$( document ).ready( function(){
  // #1
  $("h1").text("Something cheeky");

  // #2
  $("<ol><li>Sad classes to happy classes</li></ol>").appendTo("h4");
  $("<li>Pop-up link</li><li>Pop-up position</li><li>Ellipsis</li><li>Add text area</li>").insertAfter("ol li");

  // #3
  $(".sad").removeClass("sad")
           .addClass("happy");

  // #4
  $("#annoying-popup a").attr("href", "http://www.cashcats.biz");

  // #5
  $("#annoying-popup").css({
    'top': '40px',
    'left': '600px'
  });

  // #6
  $firstListItem = $(".suggested-topics ul li").first();
  $firstListItem.siblings()
                .last()
                .prev()
                .text("Derivative debugs");

  // #7
  $('.input-form form input').first()
                             .replaceWith('<textarea>');
});
