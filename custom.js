$(document).ready(function() {

	// 1.
	$("h1").html("John Wick");

	// 2.
	let orderList = $("<ol>");
	orderList.append(
		"<li>Change the <code><span><</span>h1>" +
		"</code> to something cheeky</li>"
	);
	orderList.append(
		"<li>Inside the container for \"Upcoming " +
	  "Traversals\", create and insert an ordered "+ 
	  "list which corresponds to this one.</li>"
	);
	orderList.append(
		"<li>Make all sad classes into happy ones" +
		".</li>"
	);
	orderList.append(
		"<li>Make the annoying popup link point " +
	  "instead to http://www.cashcats.biz.</li>"
	);
	orderList.append(
		"<li>Change the positioning of the annoying " +
	  "popup so it is on the right side of the screen " + 
	  "(it's okay to use direct CSS here). Make it 30 pixels " +
	  "lower than its current position by utilizing its current top value.</li>"
	);
	orderList.append("<li>Replace the ellipsis ... in one of the " +
	  "suggested topics with content of your choice -- but do so " +
	  "by traversing from a different element.</li>"
	);
	orderList.append("<li>Replace the form input with a <code>" +
	  "<span><</span>textarea></code> instead of a <code><span>" + 
	  "<</span>input type=\"text\"<span>></span></code>.</li>"
	);
	$(".info-box").append(orderList);

	// 3.
	$(".sad").removeClass("sad").addClass("happy");

	// 4.
	let popup = $("#annoying-popup");
	popup.children()
			.filter('a')
			.attr("href", "http://www.cashcats.biz");

	// 5. 	
	popup.css("right", "10px");
	popup.css("top", "30px");

	// 6.
	let lists = $(".suggested-topics ul").children()
	lists.each(function(index, element) {
		if($(element).text() == "...") {
			$(element).text("Doctor Strange")
		}
	})

	// 7.
	$(".input-form form").children()[0].remove()
	$(".input-form form").prepend("<textarea placeholder='Tell me a story!'></textarea>")
})