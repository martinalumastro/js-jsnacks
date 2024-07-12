console.log('snack-01')
// snack 01
// L’utente inserisce due numeri in successione, con due prompt.
// Il software stampa il maggiore.

const num1 = parseInt(prompt('Scrivi qui un numero')); //number
const num2 = parseInt(prompt('Scrivi qui un altro numero')); //number

//console.log(num1,num2)

if(isNaN(num1)) {
    console.log('Uno o entrambi i numeri inseriti non risultano validi')
} else if(isNaN(num2)) {
    console.log('Uno o entrambi i numeri inseriti non sono validi')
} else if(num1 > num2) {
    console.log('Il numero ' + num1 + ' è il maggiore')
} else if(num1 < num2) {
    console.log('il numero ' + num2 + ' è il maggiore')
} else {
    console.log('i numeri ' + num1 + ' e ' + num2 + ' sono uguali')
}