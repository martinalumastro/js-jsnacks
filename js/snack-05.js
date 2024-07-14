console.log('snack 6')

// snack 05
// Crea un array vuoto.
// Chiedi per 6 volte all’utente di inserire un numero,
// se è dispari inseriscilo nell’array. Stampa l’array alla fine.

const numeri = []

for(let i = 0; i < 6; i++) {
    let numUtente = parseInt(prompt('Inserisci qui un numero')) //number
    //console.log(numUtente)

    if(numUtente % 2 !== 0) {
        numeri.push(numUtente)
    }
}
console.log(numeri)