let userScore = 0,
    computerScore = 0,
    gameOver = false;



function computerPlay() {
    let x = Math.floor((Math.random() * 3) +1);
    if (x == 1) {
        return 'rock';
    } else if (x == 2) {
        return 'paper';
    } else if (x == 3) {
        return 'scissors';
    }
  }

function playRound(playerSelection, computerSelection) {
      playerSelection = playerSelection.toLowerCase();

      switch (playerSelection + '|' + computerSelection) {
            case 'rock|scissors':
            case 'paper|rock':
            case 'scissors|paper':
                userScore++;
                return 'win';
            
            case 'rock|paper':
            case 'paper|scissors':
            case 'scissors|rock':
                computerScore++;
                return 'lose';
            
            case 'paper|paper':
            case 'rock|rock':
            case 'scissors|scissors':
                return 'draw';
       }
 }

function descriptionDisplay(outcome, playerSelection, computerSelection) {
     switch (outcome) {
         case 'win':
             document.getElementById("description").innerHTML = "Your " + playerSelection + " beats my " + computerSelection + "!";
             break;
         case 'lose':
             document.getElementById("description").innerHTML = "My " + computerSelection + " beats your " + playerSelection + "!";
             break;
         case 'draw':
             document.getElementById("description").innerHTML = "We both chose " + playerSelection + "!";
             break; 

        }
    }

function score() {
    document.getElementById("score").innerHTML = userScore + ':' + computerScore;
}

function check() {
    if (!(userScore < 3 && computerScore < 3)) {
        if (userScore > computerScore) {
            document.getElementById("description").innerHTML = "You've won!";
        } else {
            document.getElementById("description").innerHTML = "You've lost!";
        }
        return true;
    } else { 
        return false;
    }
}

function reset () {
    gameOver = false;
    userScore = 0;
    computerScore = 0;
    score();
    document.getElementById("description").innerHTML = "Game reset!";
}

function main(playerSelection) {
    if (gameOver === false) {
        const computerSelection = computerPlay();
        let outcome = playRound(playerSelection, computerSelection);
        descriptionDisplay(outcome, playerSelection, computerSelection);
        score();
        gameOver = check();
    } else {
        document.getElementById("description").innerHTML = "Would you like to play again?";
        document.getElementById("score").innerHTML = "Yes " + " or " + " No" + "?";
    }
}