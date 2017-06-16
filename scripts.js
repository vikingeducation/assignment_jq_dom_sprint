// FILL IN THE FUNCTIONS BELOW
 travList =  ["1st","2nd","4th","3rd"];

 var TextFormReplace = function(){
var thisObj = document.getElementById("textForm");
var child = thisObj.childNodes[1];

thisObj.removeChild(child);
  var x = document.createElement("textarea");
  x.setAttribute("id", "mytextArea");
  x.name = "post";
x.maxLength = "500";
x.width = "5%";
x.height = "4%";
x.innerHTML = "THISSSSS";
 thisObj.appendChild(x);
 }


var ChangeH1 =  function(){
  document.getElementById("h1ID").innerHTML = "Cheeky";
}

var CreateOrderedList = function(){
  var x = document.createElement("OL");
      x.setAttribute("id", "myOl");

      document.getElementById("h4ID").appendChild(x);
    travList.sort().forEach(function(el){

      var y = document.createElement("LI");
      var t = document.createTextNode(el);
      y.appendChild(t);
      document.getElementById("myOl").appendChild(y);

    })
//document.getElementById("h4ID").style.color = "blue";

    }
  var SadToHappy =  function(){
    var sadClasses = document.getElementsByClassName("sad");
var i = 0;

for(i = 0; i < sadClasses.length; i){sadClasses[i].className = "happy";}

}

var ChangeElipses = function(){
    document.getElementById("elipses").innerHTML = document.getElementById("myOl").childNodes[0].innerHTML;
}

var ChangeLink = function(){
  var popUp = document.getElementById("annoying-popup");
popUp.innerHTML=
"<a href=http://www.cashcats.biz>" + "I have Changed This link to cats" + "</a>"
;
popUp.style.background= "blue";
popUp.style.left="80%";
popUp.style.width="19%";
var ht = popUp.style.margin.right - "330px";
popUp.style.top = "+30px"
}
