'use strict';

// console.log(document.querySelector('.message').textContent); //accessing elements on the html);
// // accesses text of the message p element
// document.querySelector('.message').textContent = 'Correct Number!';

// document.querySelector('.number').textContent = 13; // assigning value
// document.querySelector('.score').textContent = 10; //assigning value

// document.querySelector('.guess').value = 23; //assigning value
// console.log(document.querySelector('.guess').value); //logging value

const generateNum = function (min, max) {
  return Math.floor(Math.random() * (max - min) + min);
};

let correctNum = generateNum(1, 20);
let score = 10;
let highScore = 0;

const updateScoreMessage = function () {
    document.querySelector('.score').textContent = score;
  };
  
  const changeBackgroundColor = function (theColor) {
    document.querySelector('header').style.background = theColor;
  };
  
  const updateMessage = function (theMessage) {
    document.querySelector('.message').textContent = theMessage;
  };

const resetGame = function () {
  //document.querySelector('.message').textContent = 'New Game!';
  updateMessage('New Game!');
  score = 10;
  correctNum = generateNum(1, 20);
  //document.querySelector('.score').textContent = score;
  updateScoreMessage(score);
  document.querySelector('.check').addEventListener('click', checkGuess);
  //document.querySelector('header').style.background = '#333';
  changeBackgroundColor('#333');
};



const checkGuess = function () {
  const guess = Number(document.querySelector('.guess').value);
  //console.log(guess);
  if (!guess) {
    //document.querySelector('.message').textContent =
    //  'You need to type a positive number';
    updateMessage('You need to type a positive number!');
  } else {
    if (guess > correctNum) {
      //document.querySelector('.message').textContent = 'Lower!';
      updateMessage('Lower!');
      score--;
    } else if (guess < correctNum) {
      //document.querySelector('.message').textContent = 'Higher!';
      updateMessage('Higher!');
      score--;
    } else {
      //document.querySelector('header').style.background = '#6ff26b';
      changeBackgroundColor('#6ff26b');
      updateMessage('You got it!');
      document.querySelector('.check').removeEventListener('click', checkGuess);
      document.querySelector('.number').textContent = correctNum;
      if (highScore < score) {
        highScore = score;
        document.querySelector('.highscore').textContent = Number(highScore);
      }
    }
    document.querySelector('.score').textContent = score;
    if (score == 0) {
      //document.querySelector('.message').textContent = 'Game Over!';
      //document.querySelector('header').style.background = 'red';
      updateMessage('Game Over!');
      changeBackgroundColor('red');
      document.querySelector('.check').removeEventListener('click', checkGuess);
    }
  }
};

document.querySelector('.check').addEventListener('click', checkGuess);
document.querySelector('.again').addEventListener('click', resetGame);
