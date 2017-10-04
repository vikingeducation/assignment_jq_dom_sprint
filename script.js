//something cheeky
var $headers = $('h1').html('did this work?')
var $headers = $('h1').addClass('holy-crap-it-worked a-mei-zing!')

//adding traversals
var $traversals =  $( '<ol><li>Thursday - First & Last</li><li>Friday - Children & Parents</li><li>Saturday - find. closest.</li> </ol>' );
$traversals.appendTo('h4');

//turning frowns upside down
var $im_sad = $(".sad");
$($im_sad).addClass('happy');
$($im_sad).removeClass('sad');


//cat money
$('a').attr('href','http://www.cashcats.biz');

//traversing
var $lis = $('ul').children();
var $last_two = $lis.next().next().next().next().next().next().first()
$($last_two).first().html("Gullible Gotchas")

//old switch-a-roo
$( 'input[type="text"]').replaceWith('<textarea>');
