function computerPlay() {
  let random = Math.floor(Math.random() * (3 - 1 + 1) + 1);
  switch (random) {
    case 1: 
      return "Rock";
      break;
    case 2:
      return "Paper";
      break;
    case 3:
      return "Scissors";
      break;
  }
}

function playRound(playerSelection, cpuSelection) {
  const lowerPlayer = playerSelection.toLowerCase();
  const cpuPlayer = cpuSelection.toLowerCase();

  if (lowerPlayer == cpuPlayer) {
    return [0, "It's a tie!"];
  }
  else if (lowerPlayer == "scissors") {
    if (cpuPlayer == "rock") {
      return [1, "You lose. Rock beats scissors."]
    }
    if (cpuPlayer == "paper") {
      return [2, "You win! Scissors beat paper."];
    }
  }
  else if (lowerPlayer == "paper") {
    if (cpuPlayer == "rock") {
      return [2, "You win! Paper beats rock."];
    }
    if (cpuPlayer == "scissors") {
      return [1, "You lose. Scissors beats paper."];
    }
  }
  else {
    if (cpuPlayer == "paper") {
      return [1, "You lose. Paper beats rock."];
    }
    return [2, "You win! Rock beats scissors."];

  }
}

console.log(game());
