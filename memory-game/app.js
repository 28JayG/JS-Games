document.addEventListener('DOMContentLoaded', () => {
  const cardsArray = [
    { name: 'fires', img: 'images/fries.png' },
    { name: 'cheeseburger', img: 'images/cheeseburger.png' },
    { name: 'hotdog', img: 'images/hotdog.png' },
    { name: 'ice-cream', img: 'images/ice-cream.png' },
    { name: 'milkshake', img: 'images/milkshake.png' },
    { name: 'pizza', img: 'images/pizza.png' },
    { name: 'fires', img: 'images/fries.png' },
    { name: 'cheeseburger', img: 'images/cheeseburger.png' },
    { name: 'hotdog', img: 'images/hotdog.png' },
    { name: 'ice-cream', img: 'images/ice-cream.png' },
    { name: 'milkshake', img: 'images/milkshake.png' },
    { name: 'pizza', img: 'images/pizza.png' },
  ];

  let chosenCards = [];
  let chosenCardsId = [];
  let wonCards = [];

  const grid = document.querySelector('.grid');

  //create board
  const generateCards = () => {
    for (let i = 0; i < cardsArray.length; i++) {
      let card = document.createElement('img');
      card.setAttribute('src', 'images/blank.png');
      card.setAttribute('data-id', i);
      card.addEventListener('click', flipCard);
      grid.appendChild(card);
    }
  };

  function checkForMatch() {
    let cards = document.querySelectorAll('img');
    let firstChosenId = chosenCardsId[0];
    let secondChosenId = chosenCardsId[1];

    if (firstChosenId === secondChosenId) {
      cards[firstChosenId].setAttribute('src', 'images/blank.png');
      cards[secondChosenId].setAttribute('src', 'images/blank.png');
    } else if (chosenCards[0].name === chosenCards[1].name) {
      alert('You found a match');
      cards[firstChosenId].setAttribute('src', 'images/white.png');
      cards[secondChosenId].setAttribute('src', 'images/white.png');
      cards[firstChosenId].removeEventListener('click', flipCard);
      cards[secondChosenId].removeEventListener('click', flipCard);
      wonCards.push(chosenCards);
    } else {
      cards[firstChosenId].setAttribute('src', 'images/blank.png');
      cards[secondChosenId].setAttribute('src', 'images/blank.png');
      alert('Try Again!');
    }

    chosenCardsId = [];
    chosenCards = [];
    if (wonCards.length === cardsArray.length / 2) {
      resultDisplay.textContent = 'Congratulations! You found them all!';
    }
  }

  //flip card
  function flipCard() {
    let cardId = this.getAttribute('data-id');
    chosenCards.push(cardsArray[cardId]);
    chosenCardsId.push(cardId);
    this.setAttribute('src', cardsArray[cardId].img);

    if (chosenCards.length === 2) {
      setTimeout(checkForMatch, 500);
    }
  }

  generateCards();
});
