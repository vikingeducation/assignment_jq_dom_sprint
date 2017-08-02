$( document ).ready(function() {
  //Change h1
    $("h1").text("Look UP ^");
    //Add ol
    $(".info-box > h4").append( "<ol> <li>Body</li> <li>Footer</li> </ol>" );
    //Change sad class to happy
    $(".sad").addClass("happy");
    $(".happy").removeClass ("sad");
    //Change popup link
    $("#annoying-popup > a").attr("href", "http://www.cashcats.biz");
    //Change popup position
    $("#annoying-popup").css("top", "40px");
    $("#annoying-popup").css("margin-left", "85%");
    //Change ... with traversing
    var $eclipseLi = $(".suggested-topics").find("li");
    $eclipseLi.eq(6).text("DOM DOM DOM DOMMM");
    //Replace input with textarea
    var $inputTextParent = $(".input-form > form");
    var $inputTextChild = $(".input-form > form > input").get(0);
    var newElement = "<textarea rows='5' cols='8'> </textarea>";
    $inputTextParent.prepend(newElement);
    $inputTextChild.remove();
});
