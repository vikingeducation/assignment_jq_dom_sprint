$( document ).ready(function(){

	// 1) Changing the h1 tag
	$('h1').html("And now that you don't have to be perfect, you can be good.");

	// 2) Adding ordered list to .info-box h4
	$('<ol><li>Main Traversal</li><li>DOM Traversal</li><li>Mega Traversal</li></ol>').insertAfter('h4');

	// 3) Turn all sad classes into happy ones
	$('.sad').removeClass('sad').addClass('happy');

	// 4) Change the link in the popup
	$('#annoying-popup a').attr('href', 'http://trevorelwell.me');

	// 5) Change position of popup
	$('#annoying-popup').css('right', '0px').css('top', function(top){
		return top + 30;
	});

	// 6) Replace content of ... by traversing from a different element
	$('.suggested-topics ul').children().each(function(i, e){
		if($(e).html() == '...'){
			$(e).html('No longer ellipsis!!!');
		}
	});

	// 7) Turn text input into a textarea
	$('.input-form form').children().each(function(i,e){
		if($(e).attr('type') == 'text'){
			$(e).replaceWith('<textarea rows="8" placeholder="Tell me a story!"></textarea>');
		}
	});
});