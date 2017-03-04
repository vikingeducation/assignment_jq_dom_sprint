$(document).ready(function(){
  cheekyHeader();
  upcomingTraversals($('.info-box'));

});

// Change the <h1> to something cheeky
function cheekyHeader(){
  $('h1').text("Cheeks Mcgeeks")
}

// Inside the container for "Upcoming Traversals", create and insert an ordered list which corresponds to this one.
function upcomingTraversals(target){
  target.append(
    $('<ol></ol>')
      .attr('id', 'sweetList')
  );

  var listItems = []
  // create an array of list items to add
  listItems.push("Change the <h1> to something cheeky");
  listItems.push("Inside the container for \"Upcoming Traversals\", create and insert an ordered list which corresponds to this one.");
  listItems.push("Make all sad classes into happy ones.");
  listItems.push("Make the annoying popup link point instead to http://www.cashcats.biz.");
  listItems.push("Change the positioning of the annoying popup so it is on the right side of the screen (it's okay to use direct CSS here). Make it 30 pixels lower than its current position by utilizing its current top value.");
  listItems.push("Replace the ellipsis ... in one of the suggested topics with content of your choice -- but do so by traversing from a different element.");
  listItems.push("Replace the form input with a <textarea> instead of a <input type=\"text\">.");

  for ( var i = 0; i<listItems.length; i++){
    $('#sweetList').append(createListItem(listItems[i]));
  }
}

function createListItem( text ){
  return(
    $( '<li></li>').text(text)
  );
}
