function getComputerChoice() {
    randomNumber = Math.random();
    stringOutput = null;
    
    if (randomNumber <= 0.3) {
        stringOutput = "rock";
    } else if (randomNumber > 0.3 && randomNumber <= 0.6) {
        stringOutput = "paper";
    } else {
        stringOutput = "scissors";
    }

    return stringOutput;
}

function getHumanChoice() {
    return prompt("Pick rock, paper, or scissors: ");
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        humanChoice = humanChoice.toLowerCase();
    
        if (humanChoice === "rock" && computerChoice === "rock") {
            console.log("It's a Tie!");
        } else if (humanChoice === "paper" && computerChoice === "paper") {
            console.log("It's a Tie!");
        } else if (humanChoice === "scissors" && computerChoice === "scissors") {
            console.log("It's a Tie!");
        } else if (humanChoice === "rock" && computerChoice === "paper") {
            console.log("You Lose! Paper beats rock.");
            computerScore++;
        } else if (humanChoice === "paper" && computerChoice === "scissors") {
            console.log("You Lose! Scissors beats paper.");
            computerScore++;
        } else if (humanChoice === "scissors" && computerChoice === "rock") {
            console.log("You Lose! Rock beats scissors.");
            computerScore++;
        } else if (humanChoice === "rock" && computerChoice === "scissors") {
            console.log("You Win! Rock beats scissors.");
            humanScore++;
        } else if (humanChoice === "paper" && computerChoice === "rock") {
            console.log("You Win! Paper beats rock.");
            humanScore++;
        } else if (humanChoice === "scissors" && computerChoice === "paper") {
            console.log("You Win! Scissors beats paper.");
            humanScore++;
        }
    
        return humanChoice;
    }

    for (let i = 0; i < 5; i++) {
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();

        playRound(humanChoice, computerChoice);
    }

    if (humanScore > computerScore) {
        console.log(`After 5 rounds, the user wins! The final score is: Human: ${humanScore}, Computer: ${computerScore}`);
    } else if (humanScore < computerScore) {
        console.log(`After 5 rounds, the user lost! The final score is: Human: ${humanScore}, Computer: ${computerScore}`);
    } else {
        console.log(`After 5 rounds, It's a tie! The final score is: Human: ${humanScore}, Computer: ${computerScore}`);
    }
}

playGame();