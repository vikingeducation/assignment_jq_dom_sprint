//Changed the <h1> to something cheeky
var title = "<h1 style = 'color:#fff; background:#000'> Beans vs Cornbread Showdown 2018 </h1>";
    $("header h1").html(title);

//Inside the container for "Upcoming Traversals", create and insert an ordered list of upcoming traversals.
var listing = "<ol><li>Widow</li><li>Mother</li><li>Father</li><li>Worker</li></ol>";
    $(".info-box h4").html(listing);

//Make all sad classes into happy ones.
//    .info-box sad; .sad; .super-duper sad; 
$("div").removeClass(".info-box sad");
$("body > div").addClass(".info-box happy");

$("div .sad").removeClass(".sad");
$("main div").addClass(".happy");

//Made the annoying popup link point instead to http://www.cashcats.biz.
$("div super-duper sad").removeClass(".super-duper sad");
$("main > div").addClass(".super-duper happy");

//Changed the positioning of the annoying popup so it is on the right side of the screen (it's okay to use direct CSS here). Make it 30 pixels lower than its current position by utilizing its current top value.
var popup = "<a href='http://www.cashcats.biz'>Click me to get free stuff</a>";
    $("div a").html(popup); 
$("#annoying-popup").css("top","-340px");
$("#annoying-popup").css("position","relative");
$("#annoying-popup").css("float","right");

//Use nth-child(# of list item) to individually select a list item with no class or ID. List items read 1-->infinity. Unlike arrays:[0-->]
var replacementTxt = "Game of Thrones is done until 2019. So Sad.";
$("div ul li:nth-child(7)").text(replacementTxt);

//Replace the form input with a <textarea> instead of a <input type="text">
var replaceForm = "<textarea>Tell me a story!</textarea>";
$("main div form").html(replaceForm);