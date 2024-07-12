console.log('Snack 02')

// snack 02
// L’utente inserisce due parole in successione, con due prompt.
// Il software stampa prima la parola più corta, poi la parola più lunga.

let parola1 = prompt('Scrivi qui una parola');
let parola2 = prompt('Scrivi qui un\'altra parola');

// console.log(parola1,parola2)

// parola1 = parola1.length
// console.log(parola1)

// parola2 = parola2.length
// console.log(parola2)

if(parola1.length > parola2.length) {
    console.log('La parola ' + parola1 + ' è più lunga, contiene ' + parola1.length + ' caratteri')
} else if(parola1.length < parola2.length) {
    console.log('La parola ' + parola2 + ' è più lunga, contiene ' + parola2.length + ' caratteri')
} else {
    console.log('Le due parole ' + parola1 + ' e ' + parola2 + ' hanno entrambe ' + parola1.length + ' caratteri')
}