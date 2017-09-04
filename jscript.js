jQuery(document).ready(function(){


  $("h1").text("Something Cheeky");

  console.log("I have no idea what I'm doing. But it's getting better")

  $("h4").append("<ol><li> Number one</li> <li> Number two</li></ol>")

  $(".sad").attr('class', "happy");

  $("a").attr('href', "http://www.cashcats.biz");

  $("#annoying-popup").css({"right": "30px", "top": "30px"})

  $("li:nth-last-child(2)").text("Bananarama Bangarang").attr('class', 'happy')

  $("input:first-of-type").replaceWith("<textarea>'Tell me a story'</textarea>")

});
