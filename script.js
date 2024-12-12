console.log("The beginning of a new journey!")

//START//

//Global variables to keep track of cpu and human scores
let humanScore = 0
let cpuScore = 0
//This function returns a random integer between 1-3 inclusive => [1,3]
function getComputerChoice() {
    //Creating a number in range [0,3),
    //adding 1 makes it in range [1,4),
    //finally, flooring it makes it lie in range [1,3]
    let cpuChoice = Math.floor(Math.random() * 3 + 1)
    console.log(cpuChoice)

    let cpuSelection
    //using switch statement to return either R,P or S as cpu choice
    switch (cpuChoice) {
        case 1: cpuSelection = "ROCK"
            break;
        case 2: cpuSelection = "PAPER"
            break;
        case 3: cpuSelection = "SCISSORS"
            break;
    }
    console.log("Computer Choice = ", cpuSelection)
    return cpuSelection
}
//This function gets the human user's choice using prompt
function getHumanChoice() {
    //first, we ask the user to enter their choice
    let humanChoice = prompt("Enter your choice (ROCK, PAPER or SCISSORS): ")

    //then, in case they enter an empty value of cancel the prompt, we output "TERMINATED"
    if (humanChoice === "" || humanChoice === null) {
        console.log("TERMINATED")
        return
    }
    //else, compare
    else {
        //trim and capitalize the choice for stable comparisons
        humanChoice = humanChoice.trim().toUpperCase()

        //check if the choice is valid or not
        if (["ROCK", "PAPER", "SCISSORS"].includes(humanChoice)) {
            console.log("Human Choice = ", humanChoice)
            return humanChoice
        }

        //if not valid, then say invalid and redirect to the same function again
        else {
            alert("Please enter a valid choice!, try again")
            getHumanChoice()
        }
    }
}
function playRound(cpuChoice = getComputerChoice(), humanChoice = getHumanChoice()) {
    console.log(cpuChoice, humanChoice)

}
playRound()

// //function call to generate cpu choice, to see its returned value, we do console.log
// console.log("Computer Choice = ", getComputerChoice())

// //function call to get human choice from prompt, to see its returned value, we do console.log
// console.log("Human Choice = ", getHumanChoice())