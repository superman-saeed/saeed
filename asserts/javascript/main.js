var element = document.querySelectorAll("a");
var num = 0;
element.forEach(function(li,key){
  li.addEventListener("click",function(e){
    e.preventDefault();
    if (num!==key) {
      element[num].classList.remove("cliked");
      num =key;
    }

    li.classList.add("cliked");
    console.log('cliked');

  });
});
