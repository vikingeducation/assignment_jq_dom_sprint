$(document).ready(function() {

// is this a good pattern, or is it doing too many queries?
var $changeH1 = $( "h1" ); // could be more specific
	// console.log($changeH1.);
	if ( $changeH1.length ) {
		$changeH1.text("Cheeky Text");
		};

// should I be doing a variable and checking length on all of these? 
$('.info-box.sad h4').append("<ul><li>Sad to Happy</li><li>CashCats</li><li>Annoying Position</li><li>Replace an ellipse</li><li>Input Area</li></ul>");

// change class sad to happy
	$( '.sad' ).addClass( 'happy' );
	$( '.sad' ).removeClass( 'sad' );

// make annoying link point to CashCats
var $popup = $('#annoying-popup a');

	$popup.prop('href', 'http://www.cashcats.biz');
	// alert($popup.prop('href'));
// stick the blinker right and down another 30px, and regain sanity by muting the flashing
$( '#annoying-popup' )
  .css( 'right', '0px')
  .css( 'top', '40px')
  .css( 'opacity', 0.1);

// I traversed from the last child of the ul to the second to last, and replace the ellipse
// var $changeEllipse = $( 'div.suggested-topics ul li:nth-last-child(2)');
// feedback: this is a css method, I need to use jQ to find parent and then child, or similar
// https://api.jquery.com/category/traversing/tree-traversal/
var $changeEllipse = $("div.suggested-topics li:contains('...')");


	// console.log($changeEllipse.text());
var newText = $changeEllipse.text("Foo Fighters");
	// console.log(newText.text());


// replace the form input type="text" with "textarea"
var $swapInputs = $( 'div.input-form').find(':input:first').replaceWith('<textarea></textarea><br>');


// $("#some-list li").last().replaceWith('<li class="new-last-li">New one!</li>');

// $("<textarea></textarea").insertAfter($(parent).find('#excerpt'));
// $(parent).find('input#excerpt').remove()

});