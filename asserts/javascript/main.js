var nav = document.querySelectorAll("a"),
close = document.querySelector(".closebtn"),
content= document.querySelector(".content"),
navScreen = document.querySelector(".nav")


navSelection(nav);
closeNav(close);

function navSelection(element){
  var num = 0;
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
    content.style.display ="block";

  })
}
