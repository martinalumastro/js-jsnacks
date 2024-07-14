console.log('snack 6')

// snack 06
// Fate generare un numero random da 0 a 10 al computer, e chiedete all’utente di inserire un suo numero. Se il numero scelto dall’utente è uguale al numero del computer informate l’utente che ha vinto, altrimenti ha perso.


// const numPc = Math.round(Math.random() * 10)
// console.log(numPc)

const numPc = Math.floor(Math.random() * 11) //Math.round non ha la stessa probalilità per i numeri agli estremi (0 e 10) rispetto agli altri

const numUtente = parseInt(prompt('Inserisci un numero da 0 a 10'))
console.log(numUtente)

if(numUtente === numPc) {
    console.log('Complimenti. Hai indovinato il numero pensato dal computer!')
} else {
    console.log('Mi dispiace, il numero era ' + numPc + '. Riprova!')
}