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


