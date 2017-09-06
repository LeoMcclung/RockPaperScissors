var wins = 0;
var losses = 0;
var ties = 0;


function compare(choice1, choice2) {
    if (choice1 === choice2) {
        return 0;
    } else if (choice1 === "stein") {
        if (choice2 === "schere") {
            return 1;
        } else {
            return 2;
        }
    } else if (choice1 === "papier") {
        if (choice2 === "stein"){
            return 1;
        } else {
            return 2;
        }
    } else if (choice1 === "schere") {
        if (choice2 === "papier") {
            return 1;
        } else {
            return 2;
        }
    }
}

function getComputerChoice() {
    var computerChoice = Math.random();
    console.log(computerChoice)  

    if (computerChoice <= 0.33) {
        computerChoice = "stein";
    } else if (computerChoice >= 0.34 && computerChoice <= 0.66) {
        computerChoice="papier";
    } else {
        computerChoice = "schere";
    } 
    console.log("Computer: " + computerChoice);
    return computerChoice;
}

function playGame(userChoice) {
    var computerChoice = getComputerChoice()
    var gameResult = compare(userChoice, computerChoice);

    document.getElementById("player-choice").innerHTML = userChoice;
    document.getElementById("computer-choice").innerHTML = computerChoice;
    var  resultElement = document.getElementById("result");


    if (gameResult === 0) {
        console.log("The game is a tie");
        resultElement.innerHTML = "The game is a tie"
        ties++
    }else if (gameResult === 1) {
        console.log("Spieler Gewinnt")
        resultElement.innerHTML = "Spieler Gewinnt"
        wins++
    }else {
        console.log("Computer Gewinnt")
        resultElement.innerHTML = "Computer Gewinnt"
        losses++
    }
    document.getElementById("game").style.display = "none";
    document.getElementById("message").style.display = "block";

    document.getElementById("wins").innerHTML = wins
    document.getElementById("losses").innerHTML = losses
    document.getElementById("ties").innerHTML = ties
    
}

function playAgain() {
    document.getElementById("game").style.display = "block";
    document.getElementById("message").style.display = "none";
}

// var userChoice = prompt("Do you choose rock,paper,or scissors?")
// playGame(userChoice)



/**
 * What if a user makes an inappropriate choice like 'dog'? How can we extend the function to handle that?

What if players in the game could also choose Rope in this game?

In this version, if both players make the same choice, the game returns a tie. What if the game didn't end there but instead asked both players for new choices?
 */