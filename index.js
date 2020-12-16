let h1 = document.querySelector("h1");
h1.textContent = "This is not the heading.";

//ordered list
let orderedList = document.getElementsByClassName("info-box sad");
let ol = document.createElement("ol"),
    li = document.createElement("li"),
    li2 = document.createElement("li");
li.textContent = "first thing";
li2.textContent = "second thing";
ol.append(li, li2);
orderedList[0].append(ol);

//sad to happy
let sadGuys = document.getElementsByClassName("sad");
for (let i = 0; i < sadGuys.length; i++) {
    sadGuys[i].classList.add("happy");
    sadGuys[i].classList.toggle("sad");
}

//annoyin popup redirection
document
    .getElementById("annoying-popup")
    .firstElementChild.setAttribute("href", "http://www.cashcats.biz");

//annoyin popup css
let sot = document.getElementById("annoying-popup");
sot.style.top = "30px";
sot.style.right = "0px";

//ellipsis replacement
document.querySelector(
    ".suggested-topics ul"
).lastElementChild.previousElementSibling.textContent = "Ellipsis replacement";
//or
// let ell = document.querySelector('.suggested-topics ul').children
// ell[ell.length - 2].textContent = 'eksi'

//replacing input-text with textarea
document.querySelector("[type=text]").outerHTML = "<textarea></textarea>";
