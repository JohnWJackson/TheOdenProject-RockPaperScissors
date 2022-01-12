var PLAYER_SCORE = 0;
var CPU_SCORE = 0;

var btns = document.querySelectorAll('button');
btns.forEach(btn => btn.addEventListener('click', game));

function game(e) {
  const playerChoice = e.target.id;
  const cpuChoice = computerPlay()
  displayChoices(playerChoice, cpuChoice);

  const roundResult = playRound(playerChoice, cpuChoice);
  displayResult(roundResult);
  
  switch (roundResult[0]) {
    case 0: break;
    case 1: CPU_SCORE++; break;
    case 2: PLAYER_SCORE++; break;
  }

  displayScore(PLAYER_SCORE, CPU_SCORE);
  
  if (CPU_SCORE > 2) {
    declareWinner("Computer");
    CPU_SCORE = 0;
    PLAYER_SCORE = 0;
  }
  if (PLAYER_SCORE > 2) {
    declareWinner("Player");
    CPU_SCORE = 0;
    PLAYER_SCORE = 0;
  }
}

function computerPlay() {
  let random = Math.floor(Math.random() * (3 - 1 + 1) + 1);
  switch (random) {
    case 1: 
      return "rock";
      break;
    case 2:
      return "paper";
      break;
    case 3:
      return "scissors";
      break;
  }
}

function playRound(playerSelection, cpuSelection) {
  console.log(playerSelection);
  console.log(cpuSelection);

  if (playerSelection == cpuSelection) {
    return [0, "It's a tie!"];
  }
  else if (playerSelection == "scissors") {
    if (cpuSelection == "rock") {
      return [1, "You lose. Rock beats scissors."]
    }
    if (cpuSelection == "paper") {
      return [2, "You win! Scissors beat paper."];
    }
  }
  else if (playerSelection == "paper") {
    if (cpuSelection == "rock") {
      return [2, "You win! Paper beats rock."];
    }
    if (cpuSelection == "scissors") {
      return [1, "You lose. Scissors beats paper."];
    }
  }
  else {
    if (cpuSelection == "paper") {
      return [1, "You lose. Paper beats rock."];
    }
    return [2, "You win! Rock beats scissors."];

  }
}

function displayChoices(player, cpu) {
  const playerdiv = document.querySelector('.playerChoice');
  const cpudiv = document.querySelector('.cpuChoice');
  playerdiv.textContent = "Player: " + player;
  cpudiv.textContent = "Computer: " + cpu;
}

function displayScore(playerScore, cpuScore) {
  const results = document.querySelector('.results');
  
  const playerdiv = document.createElement('div');
  playerdiv.textContent = "Player Score: " + playerScore;
  results.appendChild(playerdiv);
  
  const cpudiv = document.createElement('div');
  cpudiv.textContent = "Computer Score: " + cpuScore;
  results.appendChild(cpudiv);
}

function displayResult(result) {
  const div = document.querySelector('.results');
  div.textContent = result[1];
}

function declareWinner(winner) {
  const results = document.querySelector('.results');
  
  const div = document.createElement('div');
  div.textContent = "The " + winner + " won!";
  results.appendChild(div);
}

