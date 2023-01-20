let playerScore = 0;
let computerScore = 0;
const choices = ["pierre", "feuille", "ciseaux"];

function playRound() {
    
    // Demande au joueur de choisir une option
        
    let playerChoice = prompt("Choisissez pierre, feuille ou ciseaux : ");

    // Verifie si le choix du joueur est valide 

    while (!choices.includes(playerChoice)) {
        playerChoice = prompt("Choix non valide. Choisissez pierre, feuille ou ciseaux : ");
    }

    // Choix aleatoire de l'ordinateur

    let computerChoice = choices[Math.floor(Math.random()*choices.length)];

    // Affiche les choix des joueurs

    console.log("Vous avez choisis "+playerChoice+" et l'ordinateur a choisi "+computerChoice+".");


    game(playerChoice, computerChoice);

}

function game(playerChoice, computerChoice) {
    if (computerChoice === playerChoice) {
        console.log("Egalité !");
    }
    else if (
    (playerChoice === "pierre" && computerChoice === "ciseaux") || 
    (playerChoice === "feuille" && computerChoice === "pierre") || 
    (playerChoice === "ciseaux" && computerChoice === "feuille")
    ) {
        console.log("Vous avez gagné cette manche !");
        playerScore++;
    }
    else {
        console.log("L'ordinateur à gagné cette manche");
        computerScore++;
    }
    
    //Affiche le score 
    
    console.log("Score : Vous "+playerScore+" - Ordinateur " + computerScore);
}

for (let i = 0; i < 5; i++) {
    playRound(); 
}

// Determine le vainqueur 

if (playerScore > computerScore) {
    console.log("Vous avez gagné la partie !");
}
else if (playerScore < computerScore) {
    console.log("L'ordinateur a gagné la partie !");
}
else {
    console.log("Egalité !");
}