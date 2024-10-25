function askForNumberToGuess() {
    let numberToGuess;
    do {
        numberToGuess = parseInt(prompt("Joueur 1, entrez un nombre à deviner entre 0 et 50 :"), 10);
    } while (isNaN(numberToGuess) || numberToGuess < 0 || numberToGuess > 50);
    return numberToGuess;
}

function askForNumber() {
    return parseInt(prompt("Joueur 2, entrez un nombre :"), 10);
}

function didIWin(givenNumber, numberToGuess) {
    if (givenNumber === numberToGuess) {
        return true;
    } else {
        return false;
    }
}

function gamePlay() {
    let numberToGuess = askForNumberToGuess();
    let hasWon = false;

    while (!hasWon) {
        let givenNumber = askForNumber();
        hasWon = didIWin(givenNumber, numberToGuess);

        if (hasWon) {
            alert("Bravo Joueur 2 ! Vous avez deviné le nombre");
        } else {
            if (givenNumber < numberToGuess) {
                alert("Plus grand");
            } else {
                alert("Plus petit");
            }
        }
    }
}

gamePlay();
