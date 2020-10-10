function appendCardToParend(parent, number){
  let myNewCard = document.createElement('div');
      myNewCard.className = "centered-container tricki-cell ";

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
