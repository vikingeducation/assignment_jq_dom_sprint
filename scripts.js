
$(function() {
    $("h1").html("Boring Ass JQuery");

    var traversels = new Array("Document","Elelment", "Head", "Body","Title" );

    $(".info-box").append("<ol id='newList'></ol>");
      for (olnum = 0; olnum < traversels.length; olnum ++) {
        $("#newList").append("<li>" + traversels[olnum] + "</li>");
    }

    $(".sad").attr("class", "happy");

    $("a").prop("href","http://www.cashcats.biz/");

    $("#annoying-popup").css("text-align", "right").css("top", "40px");

    $("li:contains('...')").html('Changed').css('font-weight', 'bold');

    $(":text").prop("type", "textarea");



    });
