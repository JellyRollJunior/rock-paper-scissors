let humanScore = 0;
let computerScore = 0;

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

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    let losingMessage = `You lose! ${computerChoice} beats ${humanChoice}`;
    let winningMessage = `You win! ${humanChoice} beats ${computerChoice}`;
    let tieMessage = `You tied! You both picked ${humanChoice}`;
    let returnMessage;
    if (humanChoice === "rock") {
        switch (computerChoice) {
            case "rock":
                returnMessage = tieMessage;
                break;
            case "paper":
                returnMessage = losingMessage;
                computerScore++;
                break;
            default:
                returnMessage = winningMessage;
                humanScore++;
        }
    } else if (humanChoice === "paper") {
        switch (computerChoice) {
            case "rock":
                returnMessage = winningMessage;
                humanScore++;
                break;
            case "paper":
                returnMessage = tieMessage;
                break;
            default:
                returnMessage = losingMessage;
                computerScore++;
        }
    } else {
        // humanChoice == "scissors" || human entered invalid text
        switch (computerChoice) {
            case "rock":
                returnMessage = losingMessage;
                computerScore++;
                break;
            case "paper":
                returnMessage = winningMessage;
                humanScore++;
                break;
            default:
                returnMessage = tieMessage;
        }
    }
    console.log(returnMessage);
}

// execution section
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);