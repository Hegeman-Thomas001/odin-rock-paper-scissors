'use strict'

const arrRPS = ['rock', 'paper', 'scissors'];
const playerSelection = 'Rock';
// const computerSelection = computerPlay();

function computerPlay() {
  // for (let i = 1; i <= 20; i++) {
  const randomNumber = Math.floor(Math.random() * 3);
  // console.log(randomNumber);
  // }
  return arrRPS[randomNumber];
}

// console.log(computerPlay());

function roundWinner(roundInputs) {

  if (
    roundInputs === 'rockscissors' ||
    roundInputs === 'paperrock' ||
    roundInputs === 'scissorspaper'
  ) {
    return 'Player';
  } else if (
    roundInputs === 'rockpaper' ||
    roundInputs === 'scissorsrock' ||
    roundInputs === 'paperscissors'
  ) {
    return 'Computer';
  }

  return 'Tie';

}

function playRound(playerSelection) {
  const plSelec = playerSelection.toLowerCase();

  if (plSelec === 'rock' || plSelec === 'paper' || plSelec === 'scissors') {
    // find winner
    const computerSelection = computerPlay();
    const roundInputs = `${plSelec}${computerSelection}`;

    // Player or Computer or Tie
    const whoWon = roundWinner(roundInputs);

    // console.log(playerSelection);
    // console.log(plSelec);
    // console.log(computerSelection);

    return whoWon;

  } else {
    // invalid input from player
    return 'invalid input from player';
  }

}

// console.log(playRound(playerSelection));

// Game and the rounds to play
function game(rounds = 1) {
  // round winner
  const numberOfRounds = rounds;
  const roundWin = playRound(playerSelection);
  const letterCheck = roundWin.charAt(0);
  console.log(roundWin, letterCheck, numberOfRounds);

  for (let i = 1; i <= rounds; i++) {
    // number of rounds played
  }

  if (letterCheck === 'P') {
    // player won round
  } else if (letterCheck === 'C') {
    // computer won round
  } else {
    // tie for round
  }
}

game();