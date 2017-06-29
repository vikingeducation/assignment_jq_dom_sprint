$(document).ready(function(){

	// Change the <h1> to something cheeky
	$('h1').html('something cheeky');

	// Inside the container for "Upcoming Traversals", create and insert an ordered list of upcoming traversals.
	$('h4').after('<ol><li>Make all sad classes into happy ones. Make the annoying popup link point instead to http://www.cashcats.biz.</li><li>Make the annoying popup link point instead to http://www.cashcats.biz.</li><li>Change the positioning of the annoying popup so it is on the right side of the screen.</li><li>Replace the ellipsis</li><li>Replace the form input with a textarea instead of a input type="text".</li></ol>');

	// Make all sad classes into happy ones. 
	$('.sad').addClass('happy').removeClass('sad');

	// Make the annoying popup link point instead to http://www.cashcats.biz.
	$('#annoying-popup a').attr('href', 'http://www.cashcats.biz');

	// Change the positioning of the annoying popup so it is on the right side of the screen (it's okay to use direct CSS here). Make it 30 pixels lower than its current position by utilizing its current top value.
	$('#annoying-popup').css({
		'text-align':'right',
		'position':'relative',
		'top':'30px'
	});

	// Replace the ellipsis ... in one of the suggested topics with the content of your choice -- but do so by traversing from a different element.
	$('.suggested-topics ul li').eq(6).text('Boom baby');

	// Replace the form input with a <textarea> instead of a <input type="text">.
	$('input[type="text"]').replaceWith('<textarea tpye="text" placeholder="Tell me a story"></textarea>');

});









