function getHumanChoice() {
  return prompt("Please enter rock, paper, or scissors");
}

function getComputerChoice() {
  // generate a random value between 1 and 3
  let randomValue = Math.floor(Math.random() * 3) + 1;
  // return rock, paper, or scissors depending on the value
  switch (randomValue) {
    case 1:
      return "rock";
    case 2:
      return "paper";
    default:
      return "scissors";
  }
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    let losingMessage = `You lose! ${computerChoice} beats ${humanChoice}`;
    let winningMessage = `You win! ${humanChoice} beats ${computerChoice}`;
    let tieMessage = `You tied! You both picked ${humanChoice}`;
    let resultMessage;
    if (humanChoice === computerChoice) {
      resultMessage = tieMessage;
    } else if (humanChoice === "rock") {
      switch (computerChoice) {
        case "paper":
          resultMessage = losingMessage;
          computerScore++;
          break;
        default:
          // computerChoice: scissors
          resultMessage = winningMessage;
          humanScore++;
      }
    } else if (humanChoice === "paper") {
      switch (computerChoice) {
        case "rock":
          resultMessage = winningMessage;
          humanScore++;
          break;
        default:
          // computerChoice: scissors
          resultMessage = losingMessage;
          computerScore++
      }
    } else {
      // humanChoice == "scissors" || human entered invalid text
      switch (computerChoice) {
        case "rock":
          resultMessage = losingMessage;
          computerScore++
          break;
        default:
          // computerChoice: paper
          resultMessage = winningMessage;
          humanScore++
      }
    }
    console.log(resultMessage);
  }

  // Play 5 rounds of rock paper scissors
  for (let i = 0; i < 5; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
  }
  if (humanScore > computerScore) {
    let winningMessage = "Congratulations! You win";
    console.log(winningMessage);
  } else if (humanScore < computerScore) {
    let losingMessage = "Oh no you lost. Better luck next time!";
    console.log(losingMessage);
  } else {
    let tieMessage = "You tied!";
    console.log(tieMessage);
  }
}

// execution section
playGame();