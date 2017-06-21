$(() => {
	console.log("r youz rdyz??");

	$('h1').text('JQuery Wars: Traverse and Manipulate the DOM Force');

	$('.info-box').append(
		'<ol class="newlist"><li>Traversal 1</li><li>Traversal 2</li><li>Traversal 3</li><li>Traversal 4</li><li>Traversal 5</li></ol>'
		);

	$('.newlist').css('margin-left', 45+'%');

	$(".sad").attr('class', 'happy');

	$('#annoying-popup a').attr('href', 'http://www.cashcats.biz');

	$('#annoying-popup').css('top', 40);

	$('.suggested-topics ul li').eq(6).text('Sneaky Obfuscations');

	$('.input-form form').first().replaceWith('<textarea>');

	$('.input-form').css({
		display: 'flex',
		'justify-content': 'center'
	});
});