
$(document).ready(function() {

    $('h1').css("color", "blue");


  var tsList = "<ol></ol>";

  var myLoop = ["Rome", "London" , "Paris"];
  $("h4").after(tsList);
  var $myOl = $("ol");
  for(var i=0; i < myLoop.length; i++)
  {
    $myOl.append("<li>" + myLoop[i] + "</li>");

  }

   $myOl.css("");




   $(".sad").toggleClass("sad happy");

   $("#annoying-popup").html('<a href="http://www.cashcats.biz" >http://www.cashcats.biz</a>');

   $("#annoying-popup").css("top", "30px");
   $("#annoying-popup").css("position" , "relative");
   $("#annoying-popup").css("float" , "right");
   $("h1").before( $("#annoying-popup"));


   var  $newLi = $('<li>--</li>');
   var $oldLi = $('li') [6];
   $($oldLi).replaceWith($newLi);

   var textArea = "<textarea />";
   var $inputText = $(':input[type=text]');
   $inputText.replaceWith(textArea);


});
