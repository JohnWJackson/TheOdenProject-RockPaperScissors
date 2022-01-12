var btns = document.querySelectorAll('button');
btns.forEach(btn => btn.addEventListener('click', game));

function game(e) {
  const id = e.target.id;
  const result = playRound(id, computerPlay());
  console.log(result[1]);
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

console.log()

