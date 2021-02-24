//função é algo executa uma sequecia de códigos com nomes, e pode ser aplicada em qualquer lugar
//uma função pode não receber nehum parametro, pode não retornar dado, pode receber dados de entrada como receber e retornar, existe várias possibilidade diferentes
//uma função que não recebe nada na entrada e retorna algo
//uma função que não recebe nada e não etorna nada
//uma função que recebe dados de entrada e retorna alguma coisa
//todas combinações são possiveis de serem feitas
//função sem retorno
function imprimirSoma(a, b) {
    console.log(a + b)
}

imprimirSoma(2, 3) //irá imprimir o valor de qualquer forma, ocorrerá a soma dos a + b e os outros dados seram NaN
imprimirSoma(2, 3, 5, 6, 7) 
imprimirSoma() 
imprimirSoma(2) 

//função com retorno
//se tem um valor padrão quando não repassado na função
function soma(a, b =0) {
    return a + b
}
console.log(soma(2, 3))
console.log(soma(2))//retorna 2 poruqe o parametro b=0
console.log(soma())//retona NaN poruqe o "a" não foi tratado, se não passar nada será somado undefined mais "1" e retornara NaN
