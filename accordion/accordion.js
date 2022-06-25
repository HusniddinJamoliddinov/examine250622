const allPilusMinus = document.querySelectorAll(".btn");


for (let i = 0; i < allPilusMinus.length; i++){
  allPilusMinus[i].addEventListener("click", ()=>{
    const allText2 = document.querySelectorAll(".text2");
    if(allPilusMinus[i].innerHTML == "+"){
      allPilusMinus[i].innerHTML = "-";
      allText2[i].classList.remove("hide");
    }else{
      allPilusMinus[i].innerHTML = "+";
      allText2[i].classList.add("hide");
    }
  })
}