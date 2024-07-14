console.log('snack 04')

// snack 04
// In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.

let nomi = ['Maria','Luca','Giovanni','Simone','Filippo','Elisa','Giulia','Angelina','Antonio']; //Array
console.log(nomi)

let nomeUtente = prompt('Inserisci qui il tuo nome'); //String | Null
//console.log(nomeUtente)

// if(nomi.includes(nomeUtente) == true) {
//     console.log('Ciao ' + nomeUtente + '. Puoi partecipare alla festa!')
// } else {
//     console.log('Ciao ' + nomeUtente + '. Mi dispiace ma non risulti tra gli invitati alla festa')
// }

const trovato = nomi.includes(nomeUtente); //boolean
//console.log(trovato)

if(trovato === true) {
    console.log('Sei tra gli invitati alla festa')
} else {
    console.log('Mi dispiace non sei stato invitato')
}