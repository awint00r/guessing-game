/* Generates a random number between 1 and 50  and rounds it down to nearest value */
const randomNumber = Math.floor(Math.random() * 50) + 1;
console.log(randomNumber)
console.log("hello" * 3)

/* Start with 3 guesses */
let guessesRemaining = 3;

/* Allow the user to enter their name*/
let userName = prompt('What is your name?')
console.log("Name:", userName)
/* Declares guess as the value entered by the user. */
let guess = Number(prompt(" Hi there " + userName + ". Guess a number, using digits, between 1 - 50."));
console.log("First Guess:", guess)

/* If the user guesses the correct number, an alert will display letting them know they got it and what the correct number was; otherwise the guesses remaining will decrease by 1 and the user will be alerted on whether they were too high or too low.. */
if (guessesRemaining == 3) {
    if (guess < (randomNumber) && guess > 0) {
        guessesRemaining--;
        alert('That number is too low ' + userName + '. You have ' + guessesRemaining + ' guesses remaining.');
    } else if (guess == (randomNumber)) {
        alert('You NAILED it ' + userName + '! The correct number was ' + randomNumber + '.')
        console.log(guessesRemaining)
    } else if (guess > (randomNumber) && guess < 50) {
        guessesRemaining--;
        alert('That number is too high ' + userName + '. You have ' + guessesRemaining + ' guesses remaining');
    } else if (guess != (Number) || guess < 1 || guess > 50) {
        alert('Please enter a number, using digits, between 1-50 and try again.');
        guess = Number(prompt(" Hi there " + userName + ". Guess a number, using digits, between 1 - 50."));
        console.log("Second Guess:", guess)
        if (guess < (randomNumber)) {
            guessesRemaining--;
            alert('That number is too low ' + userName + '. You have ' + guessesRemaining + ' guesses remaining.');
        } else {
            guessesRemaining--;
            alert('That number is too high ' + userName + '. You have ' + guessesRemaining + ' guesses remaining');
        }
    }
}

/* If the user guesses the correct number, an alert will display letting them know they got it and what the correct number was; otherwise the guesses remaining will decrease by 1 and the user will be alerted on whether they were too high or too low.. */

if (guessesRemaining == 2) {
    guess = prompt("Guess a number, using digits, between 1 - 50.");
    if (guess < (randomNumber) && guess > 0) {
        guessesRemaining--;
        alert('That number is too low ' + userName + '. You have ' + guessesRemaining + ' guesses remaining.');
    } else if (guess == (randomNumber)) {
        alert('You NAILED it ' + userName + '! The correct number was ' + randomNumber + '.')
    } else if (guess > (randomNumber) && guess < 50) {
        guessesRemaining--;
        alert('That number is too high ' + userName + '. You have ' + guessesRemaining + ' guesses remaining');
    } else if (guess != (Number) || guess < 1 || guess > 50) {
        alert('Please enter a number, using digits, between 1-50 and try again.');
        guess = Number(prompt(" Hi there " + userName + ". Guess a number, using digits, between 1 - 50."));
        console.log("Second Guess:", guess)
        if (guess < (randomNumber)) {
            guessesRemaining--;
            alert('That number is too low ' + userName + '. You have ' + guessesRemaining + ' guesses remaining.');
        } else {
            guessesRemaining--;
            alert('That number is too high ' + userName + '. You have ' + guessesRemaining + ' guesses remaining');
        }
}
}

/*If the user guesses the correct value, an alert will display letting them know they got it and what the correct number was; otherwise, the user will be shown an alert advising that they were incorrect and to refresh the page to play again. */

if (guessesRemaining == 1) {
    guess = prompt("Guess a number, using digits, between 1 - 50.");
    if (guess == (randomNumber)) {
        alert('You NAILED it ' + userName + '! The correct number was ' + randomNumber + '.')
    } else if (guess !== (randomNumber)) {
        alert('Sorry ' + userName + ', you did not guess the correct value. The correct number was ' + randomNumber + '. After pressing OK, the game will start over 5 seconds later.');
    }
}
/* Makes the page reload after 5 seconds and effectively starts the game over */
setTimeout(function(){
    window.location.reload();
 }, 5000);