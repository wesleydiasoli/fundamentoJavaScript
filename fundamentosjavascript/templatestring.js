const nome = 'Rebeca'
const concatenacao = 'Ola ' + nome + '!' // se fosse usar estrapolar iria ficar muitas informações, o certo é usar o template strig, dentro de uma variavel o templete irá acessar uma sting, além disso o templete irá considerar algumas coisas que a sting não pode fazer (por ex: no meio da string quebrar a linha)
//já o template ira considerar quebra de linha, espaços em branco
//interpolaçao que é converter a variavel dentro do próprio texto
//
const template = `
    Olá 
    ${nome}!`
console.log(concatenacao, template)

//expressões matematematica...
//o que tiver entre chaves ocorerrá a interpolação
console.log(`1+1 = s{1+1}`)
//função up, usar um parametro e uma string
//um arrow foi atribuida a uma variavel up
//dentro de um template string pode-se chamar uma função, usando aspas simples para texto, delimitidando com backshiping, pega-se o texto, passar na função e interpolar
//função dentro d eum template string começa com $ e {}
const up = s => s.toUpperCase()
console.log(`ei... ${up('cuidade')}!`)
