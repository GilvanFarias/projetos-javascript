const dino = document.querySelector(".dino");

function pulaDino(event){
  if (event.keyCode === 32){

    console.log("Pressionou espaço");

  }
}

document.addEventListener("keyup", pulaDino);

