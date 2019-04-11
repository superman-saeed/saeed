var nav = document.querySelectorAll(".next a"),
close = document.querySelector(".closebtn"),
navScreen = document.querySelector(".nav");
var num = 0;

navSelection(nav);
closeNav(close);

function navSelection(element){
  element.forEach(function(li,key){
    li.addEventListener("click",function(e){
      e.preventDefault();
      if (num!==key) {
        element[num].classList.remove("cliked");
        num =key;
      }
      li.classList.add("cliked");


    });
  });


}
function closeNav(element){
  element.addEventListener("click", function(){
    console.log("close");
    navScreen.style.width ="0";

  })
}
