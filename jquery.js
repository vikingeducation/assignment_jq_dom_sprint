$("h1").append("VAC, is that you? It's me, the people.");

$(".info-box").append("<ol><li>Funny functions</li><li>Terrible traversals</li><li>Massive manipulations</li><li>Admirable alterations</li></ol>");

$(document).ready(function(){
    $('.sad').removeClass('sad').addClass('happy');
});

$("a[href='http://www.evilwebsite.com/']").attr('href', 'http://www.cashcats.biz/')

$("a").attr("href", "http://www.cashcats.biz/")

$(document).ready(function(){
        $("#annoying-popup").css({
        	"position": "absolute",
          "top": "40px",
          "right": "16px"});
});

$(document).ready(function(){
    $("li").last().prev().replaceWith('<li>Content of your choice</li>');
});

$(document).ready(function(){
    $("input").first().replaceWith('<textarea></textarea>');
    $("input").last().remove();
});
