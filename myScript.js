function computerPlay() {
    let selection = Math.floor(Math.random() * 3);
    switch (selection) {
      case 0:
        return "Rock";
        break;
      case 1: 
        return "Paper";
        break;
      case 2:
        return "Scissors";
        break;
      default:
        return "Error";
        break;
    }
  }
function playRound(playerSelection, computerSelection) {
playerSelection = playerSelection.toLowerCase();


switch (playerSelection) {
  case "ROCK":
    if (computerSelection == "PAPER") {
      return "You lose!";
    } else if (computerSelection == "SCISSORS") {
      return "You win!";
    } else {
      return "It's a draw!";
    }

  case "SCISSORS":
    if (computerSelection == "ROCK") {
      return "You lose!";
    } else if (computerSelection == "PAPER") {
      return "You win!";
    } else { 
      return "It's a draw!";
    }
    
  case "PAPER":
    if (computerSelection == "ROCK") {
      return "You win!";
    } else if (computerSelection == "SCISSORS") {
      return "You lose!";
    } else {
      return "It's a draw!"
    }

  defaut:
    return "Please select rock, paper or scissors!";   
}
}