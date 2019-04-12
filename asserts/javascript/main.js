"use strict"
var navButtons = document.querySelectorAll(".next a"),
close = document.querySelector(".closebtn"),
navScreen = document.querySelector(".nav"),
showNav = document.querySelector(".open");
var highlight = 0;

navSelection(navButtons,navScreen);
openNav(showNav,navScreen);
closeNav(close, navScreen);

function navSelection(element,nav){
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
    console.log("close");
    nav.classList.remove("close");

  })
}
