$(document).ready(function() {

//1. Change header
  var changeHeader = function() {
    var $header = $("h1");
    $header.text("jQuerulous");
  };

  changeHeader();

//2. Create and insert an ordered list
  var insertList = function() {
    var $container = $(".info-box");

    $container.append(
    `<ol>
      <li>Change \"Traverse and Manipulate\" -> \"jQuerulous\" (To be fair this was already done by the time you read this)</li>
      <li>Insert this very list</li>
      <li>Turn frowns upside down</li>
      <li>Give cashcats all of the money</li>
      <li>Reposition cashcats ad for even better money making</li>
      <li>Suggest even worse topic</li>
      <li>Allow for more circuitous stories</li>
      </ol>`
    );

  }

  insertList();

//3. Change sad classes to happy
  var sadToHappy = function() {
    var $sadClassed = $(".sad");
    $sadClassed.toggleClass("sad");
    $sadClassed.toggleClass("happy");
  };

  sadToHappy();

//4. Change popup link

  var linkChange = function() {
    var $popupLink = $("#annoying-popup a");

    $popupLink.attr("href", "http://www.cashcats.biz");
  };

  linkChange();

//5. Reposition popup

  var movePopup = function() {
    var $popup = $("#annoying-popup");

    $popup.css("left", "75%")
    .css("top", "+=30");
  };

  movePopup();

//6. Replace list item by traversing from another element

  var replaceEllipsis = function () {
    var $listItemsParent = $("ul");

    $listItemsParent.children()
      .each(function( index, element ) {
        if ( element.textContent === "...") {
          $( element ).replaceWith("<li>Additional addendums</li>")
        }
      });
   };

   replaceEllipsis();

  //7. Replace form input with textarea

  var replaceForm = function() {
    var $inputForm = $("form input:first-child");

    $inputForm.replaceWith("<textarea placeholder=\"Tell me a story!\"></textarea>");
  };

  replaceForm();

});
