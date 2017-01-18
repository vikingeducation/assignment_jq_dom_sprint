$( document ).ready(function() {
    $('h1').text("This is supposedly cheeky!");
    var $newOrderedList = $('<ol></ol>').text('My Ordered List').addClass('pretty-ordered-list');
    var $listItem1 = $('<li></li>').text('Item 1');
	var $listItem2 = $('<li></li>').text('Item 2');
    $('h4').append($newOrderedList);
    $newOrderedList.append($listItem1);
    $newOrderedList.append($listItem2);
    $('.sad').addClass('happy');
    $('.sad').removeClass('sad');
    $('#annoying-popup a').attr('href', 'http://www.cashcats.biz');
    $('#annoying-popup').css('right', '10px');
    $( '#annoying-popup' ).css( 'top', function(i, val){
  		var newVal =  parseInt(val) + 30;
  		return newVal + "px";
	} );
	var $allLi = $('ul').children();
	var $ellipsesLi = $allLi.eq('6');
	$ellipsesLi.text("Manipulating");
	var $newTextArea = $('<textarea>').attr('placeholder', 'Tell me a story').attr('rows', '3');
	$('form').children().eq('0').replaceWith($newTextArea);
	//$('form').children().eq('0').attr('rows', 4);
});