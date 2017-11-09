"use strict";

$(document).ready(function () {
    $('h1').css({"font-size": "100px"});
    $('h4').append("<ol><li></li></ol>");
    $('.sad').replaceAll('.happy');
    $('#annoying-popup').replaceWith("<a href='http://www.cashcats.biz'>Click me to get free stuff!!!!</a>");
    $('li').replaceWith('<li>Replaced Ellipsis</li>'); $('input type="text"').replaceWith('textarea');
});