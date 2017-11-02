var h1s = document.getElementsByTagName("h1")[0];
h1s.outerHTML = "p";

var travelList = document.getElementsByTagName("h4")[0];

var destinationList = "<ol>Guatemala</ol><ol>Japan</ol><ol>Outer Space</ol>";
var travelListInner = travelList.innerHTML + destinationList;
travelList.innerHTML = travelListInner;

var sadClasses = Array.from(document.getElementsByClassName("sad"));

for (var i=0, length=sadClasses.length; i<length;i++){
  sadClasses[i].className = sadClasses[i].className.replace("sad","happy");
}

var annoyingPopup=document.getElementById("annoying-popup")
annoyingPopup.getElementsByTagName("a")[0].href="http://www.cashcats.biz";

annoyingPopup.style="right: 0px; top:30px;";

var listItems = document.getElementsByClassName("suggested-topics")[0].lastElementChild.children
var child=listItems[0];
var listItem;

while (!listItem){
  if (child.innerHTML==="..."){
    listItem = child;
  }
  child=child.nextSibling;
}

listItem.innerHTML= "Travelling with Traversing";

var formInput = document.getElementsByTagName("form")[0].children[0];
formInput.outerHTML=formInput.outerHTML.replace("input", "textarea");
