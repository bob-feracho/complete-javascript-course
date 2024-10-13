'use strict';

const playerZero = document.querySelector('.player--0');
const playerOne = document.querySelector('.player--1');
const playerZeroDisplay = document.querySelector('#score--0');
const playerOneDisplay = document.querySelector('#score--1');
const diceImg = document.querySelector('.dice');
const rollDicetBtn = document.querySelector('.btn--roll');
const holdBtn = document.querySelector('.btn--hold');
const newGameBtn = document.querySelector('.btn--new');

let playerZeroScore = 0;
let playerOneScore = 0;

let currScore = 0;

let playerActive = 0;

const generateRandNum = function () {
  return Math.floor(Math.random() * (6 - 1) + 1);
};

const switchPlayer = function () {
  if (playerZero.classList.contains('player--active')) {
    playerZero.classList.remove('player--active');
    playerOne.classList.add('player--active');
    console.log('Player 1 is the active player');
    playerActive = 1;
  } else {
    playerOne.classList.remove('player--active');
    playerZero.classList.add('player--active');
    console.log('Player 0 is the active player');
    playerActive = 0;
  }
};

const updateDice = function (theNum) {
  diceImg.src = `dice-${String(theNum)}.png`;
};

const updateCurrentScore = function (givenScore) {
  if (!playerActive) {
    const theScore = document.querySelector('#current--0');
    theScore.textContent = givenScore;
  } else {
    const theScore = document.querySelector('#current--1');
    theScore.textContent = givenScore;
  }
};

const updateTotalScore = function () {
  playerZeroDisplay.textContent = playerZeroScore;
  playerOneDisplay.textContent = playerOneScore;
};

const rollDice = function () {
  const theNum = generateRandNum();
  if (theNum === 1) {
    currScore = 0;
    updateCurrentScore(currScore);
    switchPlayer();
    updateDice(theNum);
    return;
  }
  currScore += theNum;
  updateDice(theNum);
  updateCurrentScore(currScore);
  console.log(currScore);
};

const resetGame = function () {
    
  updateCurrentScore(0);
  switchPlayer();
  if (playerActive) {
    updateCurrentScore(0);
    switchPlayer();
  }

  playerOneScore = 0;
  playerZeroScore = 0;
  updateTotalScore();
  updateDice(1);
  startGame();
};

const holdDice = function () {
  if (!playerActive) {
    playerZeroScore += currScore;
  } else {
    playerOneScore += currScore;
  }
  //console.log('Player 0 score' + playerOneScore);
  //console.log('Player 1 score' + playerZeroScore);
  currScore = 0;
  updateCurrentScore(0);
  updateTotalScore();
  if (playerOneScore >= 100 || playerZeroScore >= 100) {
    endGame();
    return;
  }
  switchPlayer();
};

const startGame = function () {
  updateTotalScore();
  rollDicetBtn.addEventListener('click', rollDice);
  holdBtn.addEventListener('click', holdDice);
  newGameBtn.addEventListener('click', resetGame);
};

const endGame = function () {
  rollDicetBtn.removeEventListener('click', rollDice);
  holdBtn.removeEventListener('click', holdDice);
  alert(`Player ${playerActive + 1} wins!`);
};

startGame();
