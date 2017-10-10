

$( "h1" ).text( "Something cheeky" );

$(".info-box").append("<ol><li>Traversal #1</li><li>Traversal #2</li><li>Traversal #3</li></ol>");

$(".sad").addClass("happy").removeClass("sad");

$("#annoying-popup a").attr("href","http://www.cashcats.biz");

$("#annoying-popup").css( 'top', function(top){
	return top + 30;
});

$("#annoying-popup").css( 'right', 0);


$(".suggested-topics ul").children().last().prev().replaceWith('<li>Screw that ellipsis</li>');

$('input[type="text"]').replaceWith('<textarea>');