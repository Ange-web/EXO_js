function demanderNombre() {
    let givenNumber = parseFloat(prompt("Veuillez entrer un nombre :"));
    return givenNumber;
}

let givenNumber=demanderNombre()

function didIwin(givenNumber){
    if(givenNumber === 22){
        alert("Bravo ! Vous avez deviné le nombre")
    }
    else if (givenNumber<22){
        alert("plus grand")
    }
    else if(givenNumber>22){
        alert("plus petit")
    }
}

didIwin(givenNumber);
