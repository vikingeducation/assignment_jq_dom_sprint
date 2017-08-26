$(document).ready(function() {
	$("h1").text("Loop and Change");								//1

	var list = $(".info-box h4").append("<ol></ol").find("ol");		//2
	for (var i = 1; i < 5; i++)
    	list.append("<li>traversal " + i + " </li>");
    $("ol").css("list-style-position", "inside");

	$(".sad").removeClass("sad").addClass("happy");					//3

	$("a[href='http://www.evilwebsite.com']").prop("href", "http://www.cashcats.biz");	//4

	$("#annoying-popup").css("right", "100px");
	$("#annoying-popup").css({
		"top": $("#annoying-popup").position().top + 30 + "px"});	//5

	$("ul li").each(function() {
        if ($(this).text() === "...")
        	$(this).text("Loopty loops");							//6
    });

	$("input[type='text']").prop("type", "textarea");				//7
});

