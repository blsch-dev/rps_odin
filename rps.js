console.log("yo!")

function randomNumber(){
    return Math.floor(Math.random() * 1000 + 1);
}

function getComputerChoice(number){
    return (number <= 333) ? "rock" :
    (number > 667) ? "scissors" :
    "paper";
}

function getUserChoice(){
    const userChoice = prompt("Enter your choice:", "");
    return userChoice.toLowerCase();
}

function win(){
    console.log("You win!");
    userScore++;
}

function draw(){
    console.log("Draw!");
}

function loss(){
    console.log("You lose!");
    computerScore++;
}

function playRound(userChoice, computerChoice){


    if(userChoice === "rock"){
        switch(computerChoice){
            case "rock":
                console.log(draw());
                break;
            case "paper":
                console.log(loss());
                break;
            case "scissors":
                console.log(win());
                break;
            default: 
                console.log("Invalid round, try again!");
        }
    } else if(userChoice === "paper"){
        switch (computerChoice){
            case "rock":
                console.log(win());
                break;
            case "paper":
                console.log(draw());
                break;
            case "scissors":
                console.log(loss());
                break;
            default: 
                console.log("Invalid round, try again!");
        }
    } else {
        switch(computerChoice){
            case "rock":
                console.log(loss());
                break;
            case "paper":
                console.log(win());
                break;
            case "scissors":
                console.log(draw());
                break;
            default: 
                console.log("Invalid round, try again!");
        }
    }
    console.log("Your choice was: " + userChoice);
    console.log("Computer's choice was: " + computerChoice);
    console.log("Your score is: " + userScore);
    console.log("Computer's score is: " + computerScore);

}

    let userScore = 0;
    let computerScore = 0;
    
function playGame(){
    
    for(i = 0; i < 5; i++){
        const userChoice = getUserChoice();
        const computerChoice = getComputerChoice(randomNumber());
        playRound(userChoice, computerChoice);
    }
}
