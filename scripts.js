$(document).ready(function(e){
  $("h1").text("I am standing outside. So, if anyone asks, I'm outstanding!");
  $new_list = $("<ol><li>Make sad classes happy</li><li>Change position of pop up link</li></ol>");
  $new_list.appendTo($(".info-box"));
  $(".sad").addClass("happy")
           .removeClass("sad");
  $('a').attr('href', 'http://www.cashcats.biz');
  $('#annoying-popup').css('left', '1050px');
  $('#annoying-popup').css('top', function(index, val){
                                          $new_top = parseInt(val) + 30;
                                          return $new_top + "px";
  });
  $ul_div = $('div').first()
                    .next();
  var $inp = $('input[type = "text"]');
  $inp.replaceWith('<textarea></textarea>');
  var $ul_elem = $("h3").next();
  $target = $ul_elem.children().filter(function(index){return $(this).text() === '...'});
  $target.text('Awesome Filtering!');
  console.log($ul_elem);
});
