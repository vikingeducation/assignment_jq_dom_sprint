$(document).ready(function() {

$('h1').html('Sassy');
});

/* CODE FOR ASSIGNMENT IN PURE JS....

  function createOL() {
  //create ordered list and append to Upcoming Traversals
  let list = document.createElement('OL');
  list.setAttribute("id", "myOL");
  document.getElementsByClassName('info-box sad')[0].appendChild(list);

  //create for loop to append the list items onto the ordered list
  let listItems = ["The DOM", "The BOM", "Your MOM"];
  for (let i = 0; i < listItems.length; i++) {
    let x = document.createElement("LI");
    let y = document.createTextNode(listItems[i]);
    x.appendChild(y);
    document.getElementById("myOL").appendChild(x);
  }

  //center ordered list on page
  document.getElementsByClassName('info-box sad')[0].style.textAlign = 'center';
  document.getElementById('myOL').style.display = 'inline-block';
  document.getElementById('myOL').style.textAlign = 'left';
}

function changeClass() {
  let sadClasses = Array.from(document.getElementsByClassName('sad'));
    for (var i = 0; i < sadClasses.length; i++) {
        sadClasses[i].setAttribute('class', 'happy');
    }
}

function popUp() {
  let pop = document.getElementById('annoying-popup');
  pop.style.right = '0px';
  pop.style.top = '40px';
}

function txtArea() {
  let t = document.getElementsByTagName('form')[0].children[0];
  t.outerHTML=t.outerHTML.replace('input', 'textarea');
};

window.onload = function() {
  document.getElementsByTagName('h1')[0].innerHTML = 'Sassy';
  createOL();
  changeClass();
  document.getElementsByTagName('a')[0].href = 'http://www.cashcats.biz';
  popUp();
  document.getElementsByTagName('ul')[0].children[6].innerHTML = 'Irritable iterations';
  txtArea();
};
*/
