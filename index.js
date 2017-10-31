$( document ).ready( function () {

	// Change content of h1 tag
	$('h1').html('Boom Ting ling Pao Lao');




	// create ol element
	let list = document.createElement('ol');

	// create list item class to add to ol;
	class ListItem {
		constructor(text){
			this.text = text;
		}
		// create element and add text to it.
		create(){
			let item = document.createElement('li');
			$(item).html(this.text);
			return item;
		}
	}
	// create new list items from ListItem class
	let item1 = new ListItem('Shaka boom boom').create();
	let item2 = new ListItem('Laka laka laka').create();
	let item3 = new ListItem('Chicken Avacado Pizza').create();

	// append list items to list
	$(list).append(item1, item2, item3);

	// append list to DOM infobox Container
	$('.info-box').append(list);



	
});