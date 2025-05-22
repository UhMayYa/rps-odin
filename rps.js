console.log("Hello World!");

function getComputerChoice(){
    let computerChoice = Math.floor(Math.random() * 3);
    switch(computerChoice)
    {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}

function getPlayerChoice(){
    let playerChoice = prompt("Enter rock, paper or scissors");
    return playerChoice;
}

function playRound(humanAction, computerAction){
    humanAction.toLowerCase();
    switch(humanAction)
    {
        case "rock":
            if(computerAction == "paper")
            {
                console.log("You lose! Paper beats Rock.");
                return "Computer";
            }
            else if(computerAction == "scissors")
            {
                console.log("You win! Rock beats Scissors.");
                return "Human";
            }
            else
            {
                console.log("Draw!");
                return "Draw";
            }
            break;
        case "paper":
            if(computerAction == "scissors")
            {
                console.log("You lose! Scissors beats Paper.");
                return "Computer";
            }
            else if(computerAction == "rock")
            {
                console.log("You win! Paper beats Rock.");
                return "Human";
            }
            else
            {
                console.log("Draw!");
                return "Draw";
            }
            break;
        case "scissors":
            if(computerAction == "rock")
            {
                console.log("You lose! Rock beats Scissors.");
                return "Computer";
            }
            else if(computerAction == "paper")
            {
                console.log("You win! Scissors beats Paper.");
                return "Human";
            }
            else
            {
                console.log("Draw!");
                return "Draw";
            }
            break;
    }
}

function playGame()
{
    for(let i = 0; i < 5; i++)
    {
        compChoice = getComputerChoice();
        playChoice = getPlayerChoice();

        console.log("The player chose:",playChoice);
        console.log("The computer chose:",compChoice);

        let winner = playRound(playChoice, compChoice);
        if(winner == "Computer")
        {
            ++computerScore;
        }
        else if(winner == "Human")
        {
            ++humanScore;
        }
    }

    console.log("Final Computer Score:",computerScore);
    console.log("Final Human Score:",humanScore);

    if(humanScore > computerScore)
    {
        console.log("Human wins!");
    }
    else if(humanScore < computerScore)
    {
        console.log("Computer wins!");
    }
    else
    {
        console.log("It is a draw!");
    }
}

let humanScore = 0;
let computerScore = 0;

playGame();







