// import myEffectsUtils from './effets.js'
// myEffectsUtils.setCardsPopEffect();





function setCardsPopEffect(){
    let myitems = document.getElementsByClassName('centered-container tricki-cell');
      for(let i=0; i<myitems.length; i++){
        let myCard = myitems[i];
            myCard.addEventListener('mouseover', () => {
              myCard.classList.add("onhover-card");
            });
          
          myCard.addEventListener('mouseout', () => {
            myCard.classList.remove('onhover-card');
          });
      } 
}

setCardsPopEffect();
