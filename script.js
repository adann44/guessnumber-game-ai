const randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

const guessInput = document.getElementById('guessInput');
const guessButton = document.getElementById('guessButton');
const message = document.getElementById('message');

guessButton.addEventListener('click', () => {
    const userGuess = parseInt(guessInput.value);
    
    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        message.textContent = 'Please enter a valid number between 1 and 100.';
    } else {
        attempts++;

        if (userGuess === randomNumber) {
            message.textContent = `Congratulations! You guessed the number ${randomNumber} in ${attempts} attempts.`;
            guessButton.disabled = true;
            guessInput.disabled = true;
        } else if (userGuess < randomNumber) {
            message.textContent = 'Try a higher number.';
        } else {
            message.textContent = 'Try a lower number.';
        }
    }
});
