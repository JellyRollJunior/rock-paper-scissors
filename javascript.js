function getHumanChoice() {
    return prompt("Please enter rock, paper, or scissors");
}

function getComputerChoice() {
    // generate a random value between 1 and 3
    let randomValue = Math.floor(Math.random() * 3) + 1; 
    // return rock, paper, or scissors depending on the value
    switch(randomValue) {
        case 1:
            return "rock";
        case 2:
            return "paper";
        default:
            return "scissors";
    }
}

// Return 1 if human wins and -1 if human lost
function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    let losingMessage = `You lose! ${computerChoice} beats ${humanChoice}`;
    let winningMessage = `You win! ${humanChoice} beats ${computerChoice}`;
    let tieMessage = `You tied! You both picked ${humanChoice}`;
    let resultMessage;
    let resultValue = 0;
    if (humanChoice === computerChoice) {
        resultMessage = tieMessage;
    } else if (humanChoice === "rock") {
        switch (computerChoice) {
            case "paper":
                resultMessage = losingMessage;
                resultValue = -1;
                break;
            default:
                // computerChoice: scissors
                resultMessage = winningMessage;
                resultValue = 1;
        }
    } else if (humanChoice === "paper") {
        switch (computerChoice) {
            case "rock":
                resultMessage = winningMessage;
                resultValue = 1;
                break;
            default:
                // computerChoice: scissors
                resultMessage = losingMessage;
                resultValue = -1;
        }
    } else {
        // humanChoice == "scissors" || human entered invalid text
        switch (computerChoice) {
            case "rock":
                resultMessage = losingMessage;
                resultValue = -1;
                break;
            default:
                // computerChoice: paper
                resultMessage = winningMessage;
                resultValue = 1;
        }
    }
    console.log(resultMessage);
    return resultValue;
}

function playGame() {
    let humanScore = 0;
    // Play 5 rounds
    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        humanScore += playRound(humanSelection, computerSelection);
    }
    if (humanScore > 0) {
        let winningMessage = "Congratulations! You win";
        console.log(winningMessage);
    } else if (humanScore < 0) {
        let losingMessage = "Oh no you lost. Better luck next time!";
        console.log(losingMessage);
    } else {
        let tieMessage = "You tied!";
        console.log(tieMessage);
    }
}

// execution section
playGame();