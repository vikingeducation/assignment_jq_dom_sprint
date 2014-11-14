$(document).ready(function () {

	/*  VARIABLES  */
 	var tasksList = ["Change the <code><h1></code> to something cheeky",
"Inside the container for 'Upcoming Traversals', create and insert an ordered list which corresponds to this one.",
"Make all sad classes into happy ones.",
"Make the annoying popup link point instead to http://www.cashcats.biz.",
"Change the positioning of the annoying popup so it is on the right side of the screen (it's okay to use direct CSS here).\
 Make it 30 pixels lower than its current position by utilizing its current top value.",
"Replace the ellipsis ... in one of the suggested topics with content of your choice -- but do so by traversing from a different element.",
"Replace the form input with a <code><textarea></code> instead of a <code><input type='text'>.</code>"]

	var $suggestedTopicsList = $(".suggested-topics ul li")
	var $firstTopic = $suggestedTopicsList.first()
	var $lastTopic = $firstTopic.next().next().next().next().next().next().next().next()
  var $secondToLastTopic = $lastTopic.prev()
  $secondToLastTopic = $suggestedTopicsList.last().prev()
	var $inputText = $('div form input').first()

	/*  MEAT AND POTATOES */

	$('h1').text('something cheeky');

	$('.info-box').append("<ol class='task-list'></ol>")

	$.each(tasksList, function(index, task) {
		$(".task-list").append('<li>' + task + '</li>')
	})

	$('.sad').addClass('happy')
	$('.happy').removeClass('sad')

	$('#annoying-popup a').attr('href','http://www.cashcats.biz')
	$('#annoying-popup').css({
		'right' : '0',
		'top' : function(i, val){
  		var newVal =  parseInt(val) + 30;
  		return newVal + "px";
		}
	});

	$secondToLastTopic.text('Homebrewed Manipulation (click twice!)')
	$secondToLastTopic.addClass('homebrew')
	$( "li" ).click(function() {
	  $( ".homebrew" ).animate({
	    opacity: 1,
	    height: "toggle"
	  }, 200, function() {
	  	$( ".homebrew" ).text('Never Trust a Trautman');
	  });
	});

	$inputText.replaceWith("<textarea style='resize : none'>Type UR Naem PLZ</textarea>");

});