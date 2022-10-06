function rockPaperScissors(playerTurn) {
    const rock = "Rock";
    const paper = "Paper";
    const scissors = "Scissors";

    // Player logic - turn definition
    if (playerTurn == "r" || playerTurn == "rock") {
        playerTurn = rock;
        console.log(`The player chooses ${rock}`);
    } else if (playerTurn == "p" || playerTurn == "paper") {
        playerTurn = paper;
        console.log(`The player chooses ${paper}`);
    } else if (playerTurn == "s" || playerTurn == "scissors") {
        playerTurn = scissors;
        console.log(`The player chooses ${scissors}`);
    } else {
        console.log("Invalid Input. Try Again...");
    }

    // Computer logic - turn definition
    let npcRandomNumber = Math.floor(Math.random() * 3);
    let npcTurn = "";
    if (npcRandomNumber == 0) {
        npcTurn = rock;
    } else if (npcRandomNumber == 1) {
        npcTurn = paper;
    } else if (npcRandomNumber == 2) {
        npcTurn = scissors;
    }
    console.log(`The computer chooses ${npcTurn}`);

   
    




}

rockPaperScissors("r");