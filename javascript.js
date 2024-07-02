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