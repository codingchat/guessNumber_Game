let guessNumber = Math.floor(Math.random() * 100) + 1;

while (true) {
    let userGuess = parseInt(prompt("Guess the number between 1 to 100"));

    if (userGuess > guessNumber) {
        console.log("Your number is too high", userGuess);
    }
    else if (userGuess < guessNumber) {
        console.log("Your number is too low", userGuess);
    }
    else {
        console.log("Congratulations! You guessed the correct number");
        break; // Exit the loop when the correct number is guessed
    }
}