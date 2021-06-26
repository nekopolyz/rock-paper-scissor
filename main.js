

function computerPlay(){
    let computer = ["rock","paper","scissor"];
    let rand = Math.floor(Math.random() * computer.length);
    console.log("Computer chose: " + computer[rand]);
    return computer[rand]
    
}



function playRound(playerSelection,computerSelection){
    if (computerSelection == playerSelection){
        console.log("Helper: " + computerSelection,playerSelection);
        return "Draw";

    } else if (computerSelection == "rock" && playerSelection == "scissor"){
        return "computer win";
    
    } else if (computerSelection == "scissor" && playerSelection == "rock"){
        return "computer lose";
    } else if (computerSelection == "paper" && playerSelection == "rock"){
        return "Computer win";
    
        
        
    } else if (playerSelection == "rock" && computerSelection == "scissor") {
        return "Player win"
    } else if (playerSelection == " scissor" && computerSelection == "rock") {
        return "Player wwin"
    } else if (playerSelection == "paper" && computerSelection == "rock"){
        return "Player win"
    } else if (computerSelection == "scissor" && playerSelection == "paper") {
        return "computer win"
    } else if (playerSelection == "scissor" && computerSelection == "paper"){
        return "player win"
    } else {
        console.log(playerSelection,computerSelection);
        return "invalid"
    } 

} 

 
let playerSelection = prompt("Rock Paper Scissor").toLowerCase();
let computerSelection = computerPlay(); 
console.log("Player chose: " + playerSelection);


// game()

console.log("Result: " + playRound(playerSelection, computerSelection));




// function game(){
//     playerRound(playerSelection,computerSelection)
//     playerRound(playerSelection,computerSelection)
//     playerRound(playerSelection,computerSelection)
//     playerRound(playerSelection,computerSelection)
//     playerRound(playerSelection,computerSelection)
// }




