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
    let messageContainer = document.createElement("div")
    let scoreContainer = document.createElement("div")
    let humanScore = 0;
    let computerScore = 0;
    let rounds = 5;

    function playRound(humanChoice, computerChoice) {
        humanChoice = humanChoice.toLowerCase();
    
        if (humanChoice === "rock" && computerChoice === "rock") {
            messageContainer.textContent = "It's a Tie!"
        } else if (humanChoice === "paper" && computerChoice === "paper") {
            messageContainer.textContent = "It's a Tie!"
        } else if (humanChoice === "scissors" && computerChoice === "scissors") {
            messageContainer.textContent = "It's a Tie!"
        } else if (humanChoice === "rock" && computerChoice === "paper") {
            messageContainer.textContent = "You Lose! Paper beats rock."
            computerScore++;
        } else if (humanChoice === "paper" && computerChoice === "scissors") {
            messageContainer.textContent = "You Lose! Scissors beats paper."
            computerScore++;
        } else if (humanChoice === "scissors" && computerChoice === "rock") {
            messageContainer.textContent = "You Lose! Rock beats scissors."
            computerScore++;
        } else if (humanChoice === "rock" && computerChoice === "scissors") {
            messageContainer.textContent = "You Win! Rock beats scissors."
            humanScore++;
        } else if (humanChoice === "paper" && computerChoice === "rock") {
            messageContainer.textContent = "You Win! Paper beats rock."
            humanScore++;
        } else if (humanChoice === "scissors" && computerChoice === "paper") {
            messageContainer.textContent = "You Win! Scissors beats paper."
            humanScore++;
        }

        scoreContainer.textContent = `Human Score: ${humanScore}, Computer Score: ${computerScore}`
    
        return [messageContainer, scoreContainer];
    }

    const rockButton = document.createElement('button');
    const paperButton = document.createElement('button');
    const scissorsButton = document.createElement('button');

    rockButton.textContent = "Rock";
    paperButton.textContent = "Paper";
    scissorsButton.textContent = "Scissors";

    document.body.appendChild(rockButton);
    document.body.appendChild(paperButton);
    document.body.appendChild(scissorsButton);

    let winnerContainer = document.createElement("div");

    const displayWinner = () => {
        winnerContainer.textContent = humanScore > computerScore ? "After 5 rounds, Human wins!" :
                                        humanScore < computerScore ? "After 5 rounds, Computer wins!" :
                                        humanScore === computerScore ? "After 5 rounds, It's a tie!" : ""
        document.body.appendChild(winnerContainer);
    }

    rockButton.addEventListener("click", () => {
        let [messageContainer, scoreContainer] = playRound("rock", getComputerChoice());
        document.body.appendChild(messageContainer);
        document.body.appendChild(scoreContainer);
        rounds--;

        if (rounds === 0) {
            displayWinner();
        }
    });

    paperButton.addEventListener("click", () => {
        let [messageContainer, scoreContainer] = playRound("paper", getComputerChoice());
        document.body.appendChild(messageContainer);
        document.body.appendChild(scoreContainer);
        rounds--;

        if (rounds === 0) {
            displayWinner();
        }
    });

    scissorsButton.addEventListener("click", () => {
        let [messageContainer, scoreContainer] = playRound("scissors", getComputerChoice());
        document.body.appendChild(messageContainer);
        document.body.appendChild(scoreContainer);
        rounds--;

        if (rounds === 0) {
            displayWinner();
        }
    });
}

playGame();