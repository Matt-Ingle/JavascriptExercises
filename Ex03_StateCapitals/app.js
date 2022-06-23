// NOTE: This imports an ARRAY of state capital data from the given file.
//       Each item in the array is a Javascript object, with two properties:
//
//             state:   The name of the state, as a string
//             capital: The name of the capital, as a string
//
//       You can use this array in this script file.
import { stateCapitals } from "./stateCapitals.js";

const stateDisplay = document.getElementById("stateDisplay");
const scoreDisplay = document.getElementById("scoreDisplay");
const capitalInput = document.getElementById("capitalInput");
const guessButton = document.getElementById("guessButton");
const previousResultDisplay = document.getElementById("previousResultDisplay");

let score = 0;

// This function will return a random number between the 'min'
// parameter and the 'max' parameter.  This can be useful for
// things like, I dunno, getting a random item from an array...
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// When the function runs (which happens when the page loads as well
// as after a guess is made), it should show a random state and 
// make the page ready to check the guess when the user makes one
function showNextState() {  
  stateDisplay.innerText = "???";  // What should this be?

  // Clear out the capital guessing field 
  // when showing the next state to the user
  capitalInput.value = "";  
}

// Called when the user clicks the 'Guess' button or hits enter.
// The string contents of the input field are passed to it.
function makeGuess(guess) {
  console.log("Your guess: " + guess);

  showNextState();
}

// This will add two event listeners, one to the 'Guess' button and another
// for when the user hits the 'Enter' key.  For both of these, the 
// makeGuess() function above is called, with the user-entered value in the 
// input field.
guessButton.addEventListener('click', () => { makeGuess(capitalInput.value);})
document.addEventListener('keyup', (e) => {
  if (e.code === "Enter") {
      makeGuess(capitalInput.value);
  }
});

showNextState();
