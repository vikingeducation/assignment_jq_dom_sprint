$(document).ready(function() {
    $('h1').first().html("Something cheeky, yaa bastard");
    var $newLi = $('<li>This is new!</li>');
    var $nextLi = $newLi.first().clone();
    var $newUl = $('<ul></ul');
    $newUl.append($newLi);
    $newUl.append($nextLi);
    $('.sad h4').after($newUl);

    $$('.sad').addClass('happy');
    $$('.sad').removeClass('sad');

    $$('#annoying-popup a').attr("href", "http://www.cashcats.biz");
    $$('#annoying-popup').css("top", "40px");
    $$('#annoying-popup').css("right", "0");
    $elip = $('ul li').filter(':contains("...")');
    $elip.addClass('happy');

    $masman = $('ul li:nth-child(5)').fadeOut();
    $('input[type="text"]').first().replaceWith('<textarea> </textarea>');

  }
)
