
//change h1 header

function changeH1(blah){
  $("h1").text(blah)
  }

$().ready(function(){changeH1("test")})
$().ready(function(){
  var $upcomTrav = $('.info-box');

  $upcomTrav.append("<ul>this is a list</ul>");
  $listEl = $(".info-box ul");

//add a list to upcoming traversals
  for (var i =0;i<5; i++) {
    $listEl.append("<li>I am object " + i + "</li>")
  }
  })

//remove class sad and add class happy
$().ready(function(){
  $(".sad").removeClass("sad").addClass("happy");
})

//changes to annoying popup
$().ready(function(){
  $("#annoying-popup a").attr("href","http://www.cashcats.biz");
  $("#annoying-popup").css('top','30px')
                      .css('right','0');
})

//replace ellipsis
$().ready(function(){
  $($(".suggested-topics ul").children()[6]).text("click here for fun time");
})

//replace form
$().ready(function(){
  $($("body form")[0]).replaceWith('<textarea>')

})
