// PALINDROMA

// Chiedere all’utente di inserire una parola
let userWord = prompt("Inserisci una parola!").toLowerCase();
let wordIsPalindrome;

if (reversedWord(userWord) === userWord) {
    wordIsPalindrome = "La parola che hai scelto è palindroma!";
} else {
    wordIsPalindrome = "La parola che hai scelto NON è palindroma!";
}

document.getElementById("parola-user").innerHTML = "Hai scelto la parola: " + userWord;
document.getElementById("risultato").innerHTML = wordIsPalindrome;


// FUNZIONI

// Funzione per capire se la parola inserita è palindroma

function reversedWord(parola) {
    let risultato = "";
    for (let i = parola.length - 1; i >=0; i--) {
        risultato += parola[i];
    }

    return risultato;
}