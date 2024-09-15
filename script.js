/* Generates a random number between 1 and 50  and rounds it down to nearest value */
const randomNumber = Math.floor(Math.random() * 50) + 1;

/* Start with 3 guesses */
let guessesRemaining = 3; 

/* Declares guess as the value entered by the user. */
let guess = prompt("Guess a Number between 1 - 50.");

/* If the user guesses the correct number, an alert will display letting them know they got it and what the correct number was; otherwise the guesses remaining will decrease by 1 and the user will be alerted on whether they were too high or too low.. */
if (guessesRemaining == 3 ) { 
    if (guess < (randomNumber)) {
        guessesRemaining--;
        alert('That number is too low. You have ' + guessesRemaining + ' guesses remaining.');  
    } else if (guess == (randomNumber)) {
        alert('You NAILED it! The correct number was ' + randomNumber + '.')
    } else {
        guessesRemaining--;
        alert('That number is too high. You have ' + guessesRemaining + ' guesses remaining');
        
    }
}

/* If the user guesses the correct number, an alert will display letting them know they got it and what the correct number was; otherwise the guesses remaining will decrease by 1 and the user will be alerted on whether they were too high or too low.. */

if (guessesRemaining == 2 ) { 
    guess = prompt("Guess a Number between 1 - 50."); 
    if (guess < (randomNumber)) {
        guessesRemaining--;   
        alert('That number is too low. You have ' + guessesRemaining + ' guesses remaining.'); 
    } else if (guess == (randomNumber)) {
        alert('You NAILED it! The correct number was ' + randomNumber + '.')
    } else {
        guessesRemaining--;
        alert('That number is too high. You have ' + guessesRemaining + ' guesses remaining');
    }
}

/*If the user guesses the correct value, an alert will display letting them know they got it and what the correct number was; otherwise, the user will be shown an alert advising that they were incorrect and to refresh the page to play again. */

if (guessesRemaining == 1 ) { 
    guess = prompt("Guess a Number between 1 - 50.");
        if (guess == (randomNumber)) {
            alert('You NAILED it! The correct number was ' + randomNumber + '.')
        } else if (guess !== (randomNumber)) {
            alert('Sorry, you did not guess the correct value. The correct number was ' + randomNumber + '. Please refresh the page to play again.');
        }
    }