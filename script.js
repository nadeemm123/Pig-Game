'use strict';

const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');
const score0 = document.querySelector('#score--0');
const score1 = document.querySelector('#score--1');
const btnrollDice = document.querySelector('.btn--roll');
const btnNew = document.querySelector('.btn--new');
const btnHold = document.querySelector('.btn--hold');
const diceImg = document.querySelector('.dice');
let current0 = document.getElementById('current--0');
let current1 = document.getElementById('current--1');
score0.textContent = 0;
score1.textContent = 0;
diceImg.classList.add('hidden');
let currentScore = 0;
const totalScores = [0, 0]; //this array store the total score of both players
let activePlayer = 0;
let playing = true;

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  currentScore = 0;
  //toggle method automaticlay chekc whetrre this class is there or not agr h e to remove kr deta h agr class nhi htti to add kr deta h
  player0.classList.toggle('player--active');
  player1.classList.toggle('player--active');
};
//rolling the button
btnrollDice.addEventListener('click', function () {
  if (playing) {
    let diceRandomNumber = Math.trunc(Math.random() * 6) + 1;
    //display dice
    diceImg.classList.remove('hidden');
    diceImg.src = `dice-${diceRandomNumber}.png`;
    //check whetehr equal to 1
    if (diceRandomNumber != 1) {
      currentScore = currentScore + diceRandomNumber;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      switchPlayer();
    }
  }
});
btnHold.addEventListener('click', function () {
  if (playing) {
    totalScores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      totalScores[activePlayer];

    if (totalScores[activePlayer] >= 100) {
      playing = false;
      diceImg.classList.add('hidden');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--active');
    } else {
      //swith player
      switchPlayer();
    }
  }
});
btnNew.addEventListener('click', function () {
  playing = true;
  totalScores[0] = 0;
  totalScores[1] = 0;
  currentScore = 0;

  document.getElementById('score--0').textContent = 0;
  document.getElementById('score--1').textContent = 0;
  document.getElementById('current--0').textContent = 0;
  document.getElementById('current--1').textContent = 0;

  document
    .querySelector(`.player--${activePlayer}`)
    .classList.remove('player--winner');
  player0.classList.add('player--active');
  player1.classList.remove('player--active');
  activePlayer = 0;

  diceImg.classList.add('hidden');
});
