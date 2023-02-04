function getComputerChoice() {
    // Generates a choice for computer player.
    let compAns = generateRandDiscreteNumber(0, 2)
    // let compAns = mapIntToValue(randInt)
    console.log(`computer choice: ` + mapIntToValue(compAns))
    return compAns
}

function mapIntToValue(randInt) {
    //Takes value (expected [0, 1, 2]) and converts to string answers.
    switch (randInt) {
        case 0:
            compAns = "Rock"
            break;
        case 1:
            compAns = "Paper"
            break;
        case 2:
            compAns = "Scissors"
            break;
        default:
            compAns = "Error"
    }

    return compAns
}

function generateRandDiscreteNumber(a, b) {
    // Takes two numbers, and generates a random discrete number in that range(inclusive).

    // Sorts inputs from smallest to largest
    let sortedValues = sortValues(a, b)
    a = sortedValues[0]
    b = sortedValues[1]
    // console.log(a)
    // console.log(b)

    //Generates a random number and maps the value to the specified range.
    let range = b - a
    let randInt = Math.floor(Math.random()*(range+1) + a)
    // console.log(randInt)
    return randInt
}

function sortValues(a, b) {
    // Takes two numbers and returns an array sorted from smallest to largest.
    if (a <= b) {
        return [a, b]
    }

    else if (b < a) {
        return [b, a]
    }

    // else return undefined
}

function getPlayerChoice() {
    let playerChoice = promptUserChoice()
    playerChoice = mapPlayerChoiceToValue(playerChoice)
    console.log(`Player choice: ` + mapIntToValue(playerChoice))
    return playerChoice
}

function promptUserChoice() {
    //Asks for user input, checks if input is a valid answer.
    
    //Block asks for user input repeatedly until a valid answer is given.
    let authenticator = false;
    while (authenticator == false) {
        userInput = prompt()
        authenticator = validateUserInput(userInput)
        
        if (authenticator == false) {
            console.log("Please try again")
        }
    }
    return userInput.toLowerCase()
}

function validateUserInput(userInput) {
    //tests user input against all possible valid answers.

    let testCase = String(userInput)
    testCase = userInput.toLowerCase()
    
    if (testCase == 'rock' || testCase == "paper" || testCase == "scissors") {
        return true
    }
    else {
        return false
    }
}

function mapPlayerChoiceToValue(playerChoice) {
    //converts player input into a preset answer.
    switch (playerChoice) {
        case 'rock':
            playerAns = 0
            break;
        case 'paper':
            playerAns = 1
            break;
        case 'scissors':
            playerAns = 2
            break;
        default:
            playerAns = undefined
    }

    return playerAns
}


function playRound(){
    let playerAns = Number(getPlayerChoice())
    let computerAns = Number(getComputerChoice())
    let result = compareAnswer(playerAns, computerAns)
    describeGamestate(computerAns, playerAns, result)
    // convertResult(result)
    return result
}

function compareAnswer(playerAns, computerAns) {
    
    if (playerAns == computerAns) {
        return 0
    }

    else if (((playerAns + 1) % 3) == computerAns) {
        return -1
    }

    else if (((playerAns + 2) % 3) == computerAns) {
        return 1
    }

}

function convertResult(result) {
    
    switch(result){
        case -1:
            console.log("You Lose")
            break;
        case 1:
            console.log("You Win")
            break;
        case 0:
            console.log("Tie Game")
    }
}

function describeGamestate(compAns, playerAns, result) {
    
    switch (result) {
        case -1: console.log(`${mapIntToValue(compAns)} beats ${mapIntToValue(playerAns)}`)
            break;
        case 1: console.log(`${mapIntToValue(playerAns)} beats ${mapIntToValue(compAns)}`)
            break;
        case 0: console.log(`${mapIntToValue(compAns)} vs ${mapIntToValue(playerAns)}`)
            break;
    }

}

function game() {

    let computerScore = 0;
    let playerScore = 0;

    while (playerScore < 3 && computerScore < 3){

        let outcome = playRound()
            if (outcome == -1){
                computerScore++
                console.log(`computerScore: ${computerScore} playerScore: ${playerScore}`)
            }

            else if (outcome == 1){
                playerScore++
                console.log(`computerScore: ${computerScore} playerScore: ${playerScore}`)
            }

            else {
                console.log(`computerScore: ${computerScore} playerScore: ${playerScore}`)
            }
            console.log("")
    }

        
}




function main() {

    game()
    
}

main()