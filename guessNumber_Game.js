let guessNumber = Math.floor(Math.random() * 100) + 1;
let userGuess;
let guessCount = 0; // Initialize the guess counter

while (true) {
    userGuess = parseInt(prompt("Guess the number between 1 to 100"));
    guessCount++; // Increment the guess counter with each guess

    if (userGuess > guessNumber) {
        console.log("Your number is too high");
    } else if (userGuess < guessNumber) {
        console.log("Your number is too low");
    } else {
        console.log("Congratulations! You guessed the correct number");
        console.log("It took you " + guessCount + " guesses."); // Display the number of guesses
        break; // Exit the loop when the correct number is guessed
    }
}
