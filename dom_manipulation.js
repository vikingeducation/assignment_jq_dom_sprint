// So this function will run when the page is fully loaded.
$(document).ready(function(){

  // 1. Change the <h1> to something cheeky
  var h1Changer = {
  	header: document.getElementsByTagName("h1"),
  	changeHeader: function(header, newHeader){ header[0].textContent = newHeader }
  };

  // Running the function in h1Changer.
  h1Changer.changeHeader(h1Changer.header, "Naughty..");

  // 2. Inside the container for "Upcoming Traversals", create and insert an ordered list which corresponds to this one.
  // Inside the div container "info-box sad", I think it'd be easy to copy the innerHTML that's in there now and then insert ordered list with the instructions we've been given now...
  var addListToInfoBox = {
  	element: document.getElementsByClassName("info-box")[0],
  	listToAdd: "<ol> <li>Change the &#60h1> to something cheeky</li> <li>Inside the container for \"Upcoming Traversals\", create and insert an ordered list which corresponds to this one.</li> <li>Make all sad classes into happy ones.</li> <li>Make the annoying popup link point instead to http://www.cashcats.biz.</li> <li>Change the positioning of the annoying popup so it is on the right side of the screen (it's okay to use direct CSS here). Make it 30 pixels lower than its current position by utilizing its current top value.</li> <li>Replace the ellipsis ... in one of the suggested topics with content of your choice -- but do so by traversing from a different element.</li> <li>Replace the form input with a &#60textarea> instead of a &#60input type=\"text\">.</li> </ol>",
  	addList: function(element, listToAdd) {
  		element.innerHTML = element.innerHTML + " " + listToAdd;
  	}
  };

  // Running the function in addListToInfoBox
  addListToInfoBox.addList(addListToInfoBox.element, addListToInfoBox.listToAdd);

});