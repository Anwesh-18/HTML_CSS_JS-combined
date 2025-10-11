const randomNum = parseInt(Math.random() * 100 + 1);
const res = document.querySelector('#result');
const guesses = document.querySelector('.guesses');
const chancesLeft = document.querySelector('.remain');
const form = document.querySelector('.form');
const input = document.querySelector('.guessField');

let chances = 10;
let gameOver = false;
let userGuess = [];

function validateGuess(guess) {
    return !(isNaN(guess) || guess < 1 || guess > 100);
}

function checkGuess(guess) {
    if (guess === randomNum) return 'correct';
    else if (guess < randomNum) return 'low';
    else return 'high';
}

function resetGame() {
    window.location.reload();
}

function endGame() {
    gameOver = true;
    input.disabled = true; // stop user input
    setTimeout(() => {
        resetGame();
    }, 10000);
}

form.addEventListener('submit', function(event) {
    event.preventDefault();
    if (gameOver) return;

    const userInput = parseInt(input.value);
    if (!validateGuess(userInput)) {
        alert("Please enter a valid number between 1 and 100.");
        return;
    }

    userGuess.push(userInput);
    chances--;

    if (checkGuess(userInput) === 'correct') {
        res.textContent = "🎉 Congratulations! You've guessed the correct number!";
        endGame();
    } else if (chances === 0) {
        res.textContent = `❌ Game Over! The correct number was ${randomNum}.`;
        endGame();
    } else {
        res.textContent =
            checkGuess(userInput) === 'low'
                ? "Your guess is too low!"
                : "Your guess is too high!";
    }

    guesses.textContent = `Previous guesses: ${userGuess.join(', ')}`;
    chancesLeft.textContent = `Chances left: ${chances}`;
    input.value = ''; // clear field for next guess
});

/*Learnt about parseInt(), isNaN(), Math.random()
Math.floor(), setTimeout(), DOM manipulation, event handling
form submission prevention, and basic game logic implementation in JavaScript.*/