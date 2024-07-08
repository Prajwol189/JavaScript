'use strict';
/* console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'correct number';
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 20;
document.querySelector('.guess').value = 23; */
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    document.querySelector('.message').textContent = 'no number';
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'correct number';
    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess > secretNumber) {
    if (score > 0) {
      document.querySelector('.message').textContent = 'too high';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'you lost the game';
    }
  } else {
    if (score > 0) {
      document.querySelector('.message').textContent = 'too low';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'you lost the game';
    }
  }
});
document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('.message').textContent = 'start guessing';

  document.querySelector('.score').textContent = 20;
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('number').style.width = '30rem';
});
