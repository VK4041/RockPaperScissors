console.log("The beginning of a new journey!")

//START//

//This function returns a random integer between 1-3 inclusive => [1,3]
function getComputerChoice() {
    //Creating a number in range [0,3),
    //adding 1 makes it in range [1,4),
    //finally, flooring it makes it lie in range [1,3]
    let cpuChoice = Math.floor(Math.random() * 3 + 1)
    console.log(cpuChoice)

    //using switch statement to return either R,P or S as cpu choice
    switch (cpuChoice) {
        case 1: return "ROCK"
            break;
        case 2: return "PAPER"
            break;
        case 3: return "SCISSORS"
            break;
    }
}
//This function gets the human user's choice using prompt
function getHumanChoice() {
    //first, we ask the user to enter their choice
    let humanChoice = prompt("Enter your choice (ROCK, PAPER or SCISSORS): ")

    //then, in case they enter an empty value of cancel the prompt, we output "TERMINATED"
    if (humanChoice === "" || humanChoice === null) {
        console.log("TERMINATED")
    }
    //else, compare
    else {
        //trim and capitalize the choice for stable comparisons
        humanChoice = humanChoice.trim().toUpperCase()

         //check if the choice is valid or not
        if (["ROCK", "PAPER", "SCISSORS"].includes(humanChoice)) {
            console.log("Human Choice = ", humanChoice)
        }

        //if not valid, then say invalid and redirect to the same function again
        else {
            alert("Please enter a valid choice!, try again")
            getHumanChoice()
        }
    }
}
//function call to generate cpu choice, to see its returned value, we do console.log
console.log(getComputerChoice())

//function call to get human choice from prompt
getHumanChoice()