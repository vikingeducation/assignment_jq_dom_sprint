$( document ).ready( function() {

  $('h1').text('Cheeky Title');

  $upcoming = $( "div:contains('Upcoming traversals')");
  $myList = $( "<ol><li>Coffee</li><li>???</li><li>Profit</li><li>The Moon</li></ol>");
  $($myList).appendTo($upcoming);

  $sads = $('.sad')
  $sads.removeClass('sad').addClass('happy');


  $( '#annoying-popup a' ).attr("href", "http://www.cashcats.biz");


  var currentTop = parseInt( $( '#annoying-popup' ).css('top') );
  $( '#annoying-popup' ).css('top', currentTop + 30 + 'px' );
  $( '#annoying-popup' ).css('right', 0 );


  var $topicList = $( '.suggested-topics ul' );
  var $emptyTopic = $topicList.find('li').filter( function(index, el) {
      return this.innerHTML === ('...');
  } );
  $emptyTopic.text('Devious Divs');


  $textInput = $('input').filter( function(index, el) { return $(this).attr('type') == 'text' } );
  // save all attrs
  $textArea = $( "<textarea rows=3 cols=48>").insertAfter($textInput);
  $textArea.attr('placeholder', $textInput.attr('placeholder'));
  $textInput.remove();

})