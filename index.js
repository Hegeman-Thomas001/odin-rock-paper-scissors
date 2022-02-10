'use strict'

const arrayComputerChoices = ['rock', 'paper', 'scissors'];
const playerSelection = 'ROck';

function computerPlay() {
  const randomChoice = Math.floor(Math.random() * 3);

  return arrayComputerChoices[randomChoice];

}

function roundWinner(plSelec, computerSelection) {
  const roundInputs = `${plSelec}${computerSelection}`;

  if (
    roundInputs === 'rockscissors' || roundInputs === 'paperrock' ||
    roundInputs === 'scissorspaper'
  ) {

    return `Player won! ${plSelec} beats ${computerSelection}!`;

  } else if (
    roundInputs === 'rockpaper' ||
    roundInputs === 'scissorsrock' ||
    roundInputs === 'paperscissors'
  ) {

    return `Computer won! ${computerSelection} beats ${plSelec}!`;;

  } else if (
    roundInputs === 'rockrock' ||
    roundInputs === 'paperpaper' ||
    roundInputs === 'scissorsscissors'
  ) {

    return 'Tie, play on!';

  }

  return null;

} // end roundWinner

function playRound(playerSelection) {
  const plSelec = playerSelection.toLowerCase();

  if (
    plSelec === 'rock' ||
    plSelec === 'paper' ||
    plSelec === 'scissors'
  ) {
    // find winner
    const computerSelection = computerPlay();

    // Player or Computer or Tie
    const whoWon = roundWinner(plSelec, computerSelection);

    return whoWon;

  }
  // Player input invalid.
  return null;

} // emd playRound

// Game and the number of rounds to play
function game(numberOfRounds = 1) {
  let playerScore = 0;
  let computerScore = 0;
  let winner = '';

  for (let i = 1; i <= numberOfRounds; i++) {
    // Will return null on any input other than the three accepted.
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
      // Tie, so reset round.
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

} // end game

// initiate game for five rounds
game(5);