const gameGrid = document.getElementById("gameGrid");
const startButton = document.getElementById("startButton");
startButton.addEventListener('click', randomize);

let cards = [];
const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789";

// NOTE: WIDTH * HEIGHT must be even, otherwise the randomize
//       method will fail.  Also, (WIDTH * HEIGHT)/2 must be
//       less than characters.length
const WIDTH = 6;
const HEIGHT = 5;

if (WIDTH * HEIGHT % 2 !== 0 || 
    (WIDTH * HEIGHT) / 2 > characters.length) {
  throw("ERROR, invalid parameters for WIDTH, HEIGHT")
}

// -----------------------------------------------
function showCard(card, toggle) {
  if (toggle) {
    card.classList.add("show");
  } else {
    card.classList.remove("show");
  }
}

// -----------------------------------------------
function onCardClick(e) {
  showCard(e.currentTarget, true);
}

// -----------------------------------------------
function randomize() {
  // let the characters be in an array we can remove them form
  let values = characters.split('');

  // put the cards in a *new* array that we can remove them from
  let cardList = [...cards]; 

  // While we still have cards to put a character into...
  while(cardList.length > 0) {

    // Get a random character that is in the array of remaining
    // values.  We want to put that into 2 cards
    let randomIndex = Math.floor(Math.random() * values.length);    
    const char = values.splice(randomIndex, 1)[0];  // Remove char from array  
   
    // Get a random card from the remaining, un-set cards
    randomIndex = Math.floor(Math.random() * cardList.length);
    const cardOne = cardList.splice(randomIndex, 1)[0]; // Remove card

    // Get another random card from the remaining, un-set cards
    randomIndex = Math.floor(Math.random() * cardList.length);
    const cardTwo = cardList.splice(randomIndex, 1)[0]; // Remove card

    cardOne.innerText = char;
    cardTwo.innerText = char;
  }  

  cards.forEach(c => showCard(c, false));
}

// -----------------------------------------------
// Places a WIDTH x HEIGHT grid of divs onto the
// screen, each with their click event handler
// set.
function initialize() {
  for(let row = 0 ; row < HEIGHT; row++) {
    const rowDiv = document.createElement('div');
    gameGrid.appendChild(rowDiv);

    for (let col = 0; col < WIDTH; col++) {
      const card = document.createElement('div');
      card.classList.add("card");
      card.addEventListener('click', onCardClick);
      rowDiv.appendChild(card);
      cards.push(card);
    }
  }
}

initialize();
randomize();
