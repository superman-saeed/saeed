"use strict"
var navButtons = document.querySelectorAll(".next a"),
close = document.querySelector(".closebtn"),
navScreen = document.querySelector(".nav"),
showNav = document.querySelector(".openbtn"),
loading = document.querySelector(".load"),
portfolio = document.querySelector(".card-parent");


navSelection(navButtons,navScreen);
openNav(showNav,navScreen);
closeNav(close, navScreen);

function navSelection(element,nav){
  var highlight = 0;
  element.forEach(function(li,key){
    li.addEventListener("click",function(e){
      e.preventDefault();
      if (highlight!==key) {
        element[highlight].classList.remove("cliked");
        highlight =key;
      }
      li.classList.add("cliked");
      nav.classList.add("close");


    });
  });


}
function closeNav(element,nav){
  element.addEventListener("click", function(){
    console.log("close");
    nav.classList.add("close");

  })
}
function openNav(element,nav){
  element.addEventListener("click", function(){
    console.log("open");
    nav.classList.remove("close");

  })
}

function card(parent,title,description, url){
  var div = document.createElement("div");
  div.classList.add("card");
  desc(title,description,url).forEach(function(x){
  div.appendChild(x);
  });
  loading.style.display ="none";
  parent.appendChild(div);

}

function desc(title,des,url){
  var p1 = document.createElement("p"),
  span = document.createElement("span"),
  p2 = document.createElement("p"),
  a = document.createElement("a");
  a.href = url.toString();
  a.innerText="visit";
  p2.innerText = title.toString();
  span.innerText = des.toString();
  p1.innerText = "Platform :Web application";
  console.log(a);
  return [p2,span,p1,a];
}
