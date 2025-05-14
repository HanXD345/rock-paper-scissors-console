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

    return stringOutput
}

function getHumanChoice() {
    return prompt("Pick rock, paper, or scissors: ")
}

console.log(getComputerChoice())
console.log(getHumanChoice())