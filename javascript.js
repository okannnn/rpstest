function getComputerChoice() {
    // Generates a choice for computer player.
    let randInt = generateRandDiscreteNumber(0, 2)
    let compAns = mapIntToValue(randInt)
    console.log(`computer choice: ` + compAns)
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
    console.log(`Player choice: ` + playerChoice)
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
            playerAns = "Rock"
            break;
        case 'paper':
            playerAns = "Paper"
            break;
        case 'scissors':
            playerAns = "Scissors"
            break;
        default:
            playerAns = "Error"
    }

    return playerAns
}

function playRound(){
    let playerAns = getPlayerChoice()
    let computerAns = getComputerChoice()

}


function main() {
    playRound()

}

main()