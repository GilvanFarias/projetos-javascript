const dino = document.querySelector('.dino');

function pula(event){
  if (event.keyCode === 32){
    pula();
  }
}

function pula(){
  let position = 0;

  let upInterval = setInterval(() => {

    if (position >= 150){
      clearInterval(upInterval);
      //descendo
      let dowInterval = setInterval(() => {

      if(position <= 0){
          clearInterval(dowInterval);
      }else{

          position -= 20;
          dino.style.bottom = position + "px";

        } 
      }, 10);

    }else{

      //subindo
      position += 20;
      dino.style.bottom = position + 'px';
      
    }
  
  }, 30);
}

document.addEventListener('keyup', pula);