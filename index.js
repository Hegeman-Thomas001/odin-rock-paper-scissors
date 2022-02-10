'use strict'

const arrayComputerChoices = ['rock', 'paper', 'scissors'];
const playerSelection = 'ROck';
// const computerSelection = computerPlay();

function computerPlay() {
  // for (let i = 1; i <= 20; i++) {
  const randomChoice = Math.floor(Math.random() * 3);
  // console.log(randomNumber);
  // }
  return arrayComputerChoices[randomChoice];
}

// console.log(computerPlay());

function roundWinner(plSelec, computerSelection) {
  const roundInputs = `${plSelec}${computerSelection}`;

  if (
    roundInputs === 'rockscissors'
    || roundInputs === 'paperrock'
    || roundInputs === 'scissorspaper'
  ) {

    return `Player won! ${plSelec} beats ${computerSelection}!`;

  } else if (
    roundInputs === 'rockpaper'
    || roundInputs === 'scissorsrock'
    || roundInputs === 'paperscissors'
  ) {

    return `Computer won! ${computerSelection} beats ${plSelec}!`;;

  } else if (
    roundInputs === 'rockrock'
    || roundInputs === 'paperpaper'
    || roundInputs === 'scissorsscissors'
  ) {

    return 'Tie, play on!';

  }

  return null;

}

function playRound(playerSelection) {
  const plSelec = playerSelection.toLowerCase();

  if (
    plSelec === 'rock'
    || plSelec === 'paper'
    || plSelec === 'scissors'
  ) {
    // find winner
    const computerSelection = computerPlay();

    // Player or Computer or Tie
    const whoWon = roundWinner(plSelec, computerSelection);

    // console.log(playerSelection);
    // console.log(plSelec);
    // console.log(computerSelection);

    return whoWon;

  }

  return null;

}

// console.log(playRound(playerSelection));

// Game and the rounds to play
function game(rounds = 1) {
  // round winner
  const numberOfRounds = rounds;
  let playerScore = 0;
  let computerScore = 0;
  let winner = '';

  for (let i = 1; i <= rounds; i++) {
    const playerSelection = prompt('Enter rock, paper or scissors.');
    const roundWin = playRound(playerSelection);
    const tieCheck = roundWin.charAt(0);
    // number of rounds played
    if (tieCheck === 'P') {
      // player won round
      ++playerScore;

    } else if (tieCheck === 'C') {
      // computer won round
      ++computerScore;

    } else {
      // tie for round
      --i;

    }

    console.log(roundWin, tieCheck, numberOfRounds, computerScore, playerScore);

  } // end for

  if (playerScore > computerScore) {

    winner = 'Player';

  } else {

    winner = 'Computer';

  }

  console.log(winner);

}

// initiate game for five rounds
game(5);