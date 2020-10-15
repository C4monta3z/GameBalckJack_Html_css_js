function appendCardToParend(parent, number){
  let myNewCard = document.createElement('div');
      myNewCard.className = "centered-container tricki-cell adjustCard";
      myNewCard.style="";

      fetch('https://deckofcardsapi.com/api/deck/dn35dyclkcwt/draw/?count=2',{

          method: 'Get'
      }).then(res => {
        res.json()
          .then(DataCard => {
              console.log('Los Datos obtenidos son:', DataCard);
              myNewCard.style = "background-image: url(" +
              DataCard.cards[0].image + ")";
              
                    parent.appendChild(myNewCard);
                })
                .catch(err => {
                      console.log(err);
                });
          })
          .catch(err => {
              console.log(err);
          });

      myNewCard.addEventListener('mouseover', () => {
        myNewCard.classList.add("onhover-card");
      });

      myNewCard.addEventListener('mouseout', () => {
        myNewCard.classList.remove('onhover-card');
      });

      myNewCard.innerHTML = number;
      parent.appendChild(myNewCard);

}               

function appendCardsRowToContainer(container){
    let myNewCardsRow = document.createElement('div');
    myNewCardsRow.className = "centered-container tricki-row";
    container.appendChild(myNewCardsRow);
    return myNewCardsRow;
}

let myCardsContainer = document.getElementById('mainCardsContainer');
    for(let f=1;f<=1;f++){
       let myNewRow = appendCardsRowToContainer(mainCardsContainer);
            for(let e=1;e<=2; e++){
                appendCardToParend(myNewRow, 3*(f-1)+e);
            }

    }
