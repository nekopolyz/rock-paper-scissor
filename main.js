const buttons = document.querySelectorAll('button');
const h1 = document.querySelector('h1');
const h2 = document.querySelector('h2');
const h3 = document.querySelector('h3');
const h4 = document.querySelector('h4');

const rock = document.querySelector('#rock')
const paper = document.querySelector('#paper')
const scissor = document.querySelector("#scissor")

// var btnRock = document.createElement("BUTTON");
// var rock = document.createTextNode("ROCK");
// btnRock.appendChild(rock);
// document.body.appendChild(btnRock);  

// let btnPaper = document.createElement("BUTTON");
// let paper = document.createTextNode("PAPER");
// btnPaper.appendChild(paper);
// document.body.appendChild(btnPaper);

// let btnScissor = document.createElement("BUTTON");
// let scissor = document.createTextNode("Scissor");
// btnScissor.appendChild(scissor);
// document.body.appendChild(btnScissor)
// document.getElementsByName("button")



let result;
let score = 0;
let computerScore = 0;



function computerPlay() {
    let computer = ["rock", "paper", "scissor"];
    let rand = Math.floor(Math.random() * computer.length);
    console.log("Computer chose: " + computer[rand]);

    if (computerScore == 5) {
        h1.textContent = "You Lose";
        return;
    }
    else if (score >= 5){
        return;
    }

    return computer[rand];


}

function reset() {
    score = 0;
    computerScore = 0;
    h2.textContent = "Score 0";
    h4.textContent = "Computer Score 0"
    h3.style.color = 'red';

}

function play(e) {
    let playerChoice = e.target.id
    let computerChoice = computerPlay();
    game(playerChoice, computerChoice)
    console.log(playerChoice);
    h3.style.color = "black";


}




function game(playerChoice, computerChoice) {

    if (playerChoice == "rock" && computerChoice == "scissor") {
        h1.textContent = `You win ! ${"player " + playerChoice + " vs " + " computer " + computerChoice}`
        score +=vs
        h2.textContent = `Your Score ${score}`
        console.log(score);
    }
    else if (playerChoice == "rock" && computerChoice == "paper") {
        h1.textContent = `You Lose ! player ${playerChoice} + vs computer ${computerChoice}`
        computerScore += 1
        h4.textContent = `Computer Score ${computerScore}`
    }
    else if (playerChoice == "paper" && computerChoice == "rock") {
        h1.textContent = `You win ! player ${playerChoice}  vs computer ${computerChoice}`
        score += 1
        h2.textContent = `Your Score ${score}`
    }
    else if (playerChoice == "paper" && computerChoice == "scissor") {
        h1.textContent = `You Lose ! player ${playerChoice}  vs computer ${computerChoice}`
        computerScore += 1
        h4.textContent = `Computer Score ${computerScore}`
    }
    else if (playerChoice == "scissor" && computerChoice == "paper") {
        h1.textContent = `You Win ! player ${playerChoice}  vs computer ${computerChoice}`
        score += 1
        h2.textContent = `Your Score ${score}`
    }
    else if (playerChoice == "scissor" && computerChoice == "rock") {
        h1.textContent = `You Lose ! player ${playerChoice}  vs computer ${computerChoice}`
        computerScore += 1
        h4.textContent = `Computer Score ${computerScore}`


    }
    else if (computerScore == 5) {
        h1.textContent = "You Lose";
        return;
    }
    else {
        h1.textContent = "It's a tie";
    }
    gameOver()

}


function gameOver() {

    if (score >= 5) {
        h1.textContent = "You Won";
        return;
    }
}



// let playerSelection = prompt("Rock Paper Scissor").toLowerCase();



// game()

// console.log("Result: " + playRound(playerSelection, computerSelection));


h3.addEventListener('click', reset);
buttons.forEach(button => button.addEventListener('click', play));

rock.addEventListener('click', play)
paper.addEventListener('click', play)
scissor.addEventListener('click', play)








// function game(){
//     playerRound(playerSelection,computerSelection)
//     playerRound(playerSelection,computerSelection)
//     playerRound(playerSelection,computerSelection)
//     playerRound(playerSelection,computerSelection)
//     playerRound(playerSelection,computerSelection)
// }




