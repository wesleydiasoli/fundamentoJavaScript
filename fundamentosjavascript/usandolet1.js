var numero =1 
{
    let numeo = 2
    console.log('dentro=', numero)

}
console.log('fora =', numero)
//let tem escopo de bloco, mesmo n sendo uma função, o let estara visivel só dentro do bloco
//escopos diferentes o valores vão coexistir
//o let dentro das chaves, oelo fato de ter escopo menor e tem preferência, em seguida irá procurar no escopo de fora (mais abrangente)
//variaveis definidas com a palavra reservada var tem escopo global e de função
//let tem escopo global, escopo de função e escopo bloco
//uma palavra reservada nova, pra criar variável com esse escopo a mais.