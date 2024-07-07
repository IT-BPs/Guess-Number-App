'use strict';

// Download highscore from localStorage, if exists, or set it as 0
let highscore = localStorage.getItem('highscore') || 0;
document.querySelector('.highscore').textContent = highscore;

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 30;

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);

    // When there is no input
    if (!guess) {
        document.querySelector('.message').textContent = '⛔ No number';

    // When the guess is out of range
    } else if (guess >= 51) {
        document.querySelector('.message').textContent = '🚫 Given number is out of range';

    // When the player wins
    } else if (guess === secretNumber) {
        document.querySelector('.message').textContent = '🎉 Correct number';
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';

        // Update of highscore if score is higher than previous one
        if (score > highscore) {
            highscore = score;
            localStorage.setItem('highscore', highscore); // safe highscore  to localStorage
            document.querySelector('.highscore').textContent = highscore;
        }

        score = 0;

    // When the guess is too high
    } else if (guess > secretNumber) {
        if (score > 0) {
            document.querySelector('.message').textContent = '📈 Too high!';
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = '💀 You lost the game!! 💀';
            document.querySelector('.score').textContent = 0;
        }

    // When the guess is too low
    } else if (guess < secretNumber) {
        if (score > 0) {
            document.querySelector('.message').textContent = '📉 Too low!';
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = '💀 You lost the game!! 💀';
            document.querySelector('.score').textContent = 0;
        }
    }
});

document.querySelector('.again').addEventListener('click', function () {
    score = 30;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.message').textContent = 'Start guessing...!';
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
});
