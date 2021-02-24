{
    var sera = 'Sera?'
    console.log(sera)
}
console.log(sera) //escopo é o local onde a variavel é visivel, no caso da variavel var, a variavel var dentro de um bloco de cádigo que não seja uma função, ela ficara visivel pra todos estiver fora do bloco
//uma variavel só tem 2 escopos possiveis 

function teste() {  //bloco que está associada a uma função, será que é possivel ascessar essa variavel fora do escopo da função
     
    var local = 123 
    console.log(local)
}
teste ()
console.log(local)

//não é possivl ascessar a variavel, porque uma variavl definida dentro de uma função o escopo dessa varaiel ela é visivel dentro da função apenas 
