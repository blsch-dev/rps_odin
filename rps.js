

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


function playGame(){

    let userScore = 0;
    let computerScore = 0;

    let draw = () => console.log("Draw!");
    let win = () => console.log("You win!");
    let loss = () => console.log("You lose!");

    function playRound(userChoice, computerChoice){
        if(userChoice === "rock"){
            switch(computerChoice){
                case "rock":
                    draw();
                    break;
                case "paper":
                    loss();
                    computerScore++;
                    break;
                case "scissors":
                    win();
                    userScore++;
                    break;
                default: 
                    console.log("Invalid round, try again!");
            }
        } else if(userChoice === "paper"){
            switch (computerChoice){
                case "rock":
                    win();
                    userScore++;
                    break;
                case "paper":
                    draw();
                    break;
                case "scissors":
                    loss();
                    computerScore++;
                    break;
                default: 
                    console.log("Invalid round, try again!");
            }
        } else {
            switch(computerChoice){
                case "rock":
                    loss();
                    break;
                case "paper":
                    win();
                    break;
                case "scissors":
                    draw();
                    break;
                default: 
                    console.log("Invalid round, try again!");
            }
        }
    }

    
    for(i = 0; i < 5; i++){
        const userChoice = getUserChoice();
        const computerChoice = getComputerChoice(randomNumber());
        playRound(userChoice, computerChoice);
        console.log("Your choice was: " + userChoice);
        console.log("Computer's choice was: " + computerChoice);
        console.log("Your score is: " + userScore);
        console.log("Computer's score is: " + computerScore);
    }
}
