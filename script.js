/* Generates a random number between 1 and 50  and rounds it down to nearest value */
const randomNumber = Math.floor(Math.random() * 50) + 1;

/* Start with 3 guesses */
let guessesRemaining = 3; 

/* Declares guess as the value entered by the user. */
let guess = prompt("Guess a Number between 1 - 50.");

