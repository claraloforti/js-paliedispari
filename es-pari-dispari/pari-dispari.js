// PARI E DISPARI

// L’utente sceglie pari o dispari
let betUser = prompt("Scegli se puntare pari o dispari").toLowerCase();
// Finchè la puntata di User non corrisponde a pari e dispari, continua a chiederlo
while (betUser !== "pari" && betUser !== "dispari") {
    betUser = prompt("Campo non valido! Inserisci 'pari' o 'dispari'").toLowerCase();
}

// L'utente inserisce un numero da 1 a 5.
let numUser = parseInt(prompt("Scegli un numero da 1 a 5"));
// Finchè il numero scelto da User non è un numero e non è compreso tra 1 a 5, continua a chiederlo
while (isNaN(numUser) || numUser < 1 || numUser > 5) {
    numUser = parseInt(prompt("Numero non valido! Inserisci un numero da 1 a 5"));
}

const numPC = numRandom(1, 5);
const numSommati = sommaNum(numUser, numPC);
const pariDispari = valutaPariDispari(numSommati);
let winner;

// Verifico chi ha vinto
if (pariDispari === betUser) {
    winner = "Hai vinto!"
} else {
    winner = "Mi dispiace, ha vinto il computer!"
}

// Mostro tutti gli elementi in pagina 
document.getElementById("puntata-user").innerHTML = "La tua puntata è: " + betUser;
document.getElementById("numero-user").innerHTML = "Il tuo numero è: " + numUser;
document.getElementById("numero-pc").innerHTML = "Il Computer ha genereato il numero: " + numPC;
document.getElementById("numeri-sommati").innerHTML = "La somma dei numeri è: " + numSommati;
document.getElementById("risultato").innerHTML = winner;



// FUNZIONI

// Funzione per creare numero random da 1 a 5 per il Computer
function numRandom(min, max) {
    const risultato = Math.floor(Math.random() * (max - min + 1)) + min;
    return risultato;
}

// Sommo i due numeri
function sommaNum(num1, num2) {
    return num1 + num2;
}

// Stabilisco se la somma dei due numeri è pari o dispari
function valutaPariDispari(num) {
    let risultato;
    if (num % 2 !==0) {
      return "dispari";
    } else {
        return "pari";
    }
}