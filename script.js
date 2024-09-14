/* Generates a random number between 1 and 50  and rounds it down to nearest value */
const randomNumber = Math.floor(Math.random() * 50) + 1;

/* Start with 3 guesses */
let guessesRemaining = 3; 

/* Declares guess as the value entered by the user. */
let guess = prompt("Guess a Number between 1 - 50.");

/* If the user guesses the correct number, an alert will display letting them know they got it and what the correct number was; otherwise the guesses remaining will decrease by 1. */
if (guess == (randomNumber)) {
    alert('You NAILED it! The correct number was ' + randomNumber)
} else {
    guessesRemaining--;
};

/* If the user guesses incorrectly, an alert will display letting them know their answer was either too high or too low. */
if (guessesRemaining > 1 ) {
    if (guess < (randomNumber)) {
        alert('That number is too low. You have ' + guessesRemaining + ' guesses remaining.');
    } else {
        alert('That number is too high. You have ' + guessesRemaining + ' guesses remaining');
    }
    prompt('Guess a Number between 1 - 50.')
}

/* Replication of code for original guess except adjust verbiage for only 1 guess remaining instead of greater than 1 */
if (guessesRemaining = 1 ) {
    if (guess < (randomNumber)) {
        alert('That number is too low. You have ' + guessesRemaining + ' guess remaining.');
    } else {
        alert('That number is too high. You have ' + guessesRemaining + ' guess remaining');
    }
    prompt('Guess a Number between 1 - 50.')
}

