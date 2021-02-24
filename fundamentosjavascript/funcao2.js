//armazenando uam funcao em uma variavel 
const imprimirSoma = function (a , b) { //function é anônima
    console.log(a +b)
}
imprimirSoma(8, 3)

//armazenando uma função arrow em uma variavel, forma reduzida de construir uma função

const soma = (a, b) => { //não usou a palavra function que é substituida por =>, deposi abrir o corpo da função
    return a + b   //função arrow armazenada dentro de "soma"
}
console.log(soma(8, 3))

//retorno implícito, diminui ainda mais a sintaxe, usar o return de forma implicita sem precisar repetir
const subtracao = (a, b) => a - b //quando não tem as chaves, a função só te uma linha , irá retornar algo
console.log(subtracao(2, 3))

