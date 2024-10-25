function demanderNombre() {
    return parseFloat(prompt("Veuillez entrer un nombre :"));
}

function didIwin(givenNumber){
    const nombretr = 22;
    if(givenNumber === nombretr){
        return true;
    }
    else if (givenNumber<nombretr){
        alert("plus grand");
    }
    else if(givenNumber>nombretr){
        alert("plus petit");
    }
    return false;
}

function gameplay(){
    let win = false
    
    while(!win){
        let givenNumber = demanderNombre()
        win= didIwin(givenNumber);

        if(win){
            alert("bravo, bien joué")
        }
   }
}

gameplay()