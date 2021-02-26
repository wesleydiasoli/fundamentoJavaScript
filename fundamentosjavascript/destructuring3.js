function rand({ min = 0, max = 1000}){//rand retorna um numero aleatório, passou dois atributos dentro operadores destructering, passando um objeto pra essa função e dentro da função randomica irá acessar os objetos e tire os atributos e faça entrega pronta sem precisa usar a notação ponto
    const valor = Math.random () * (max - min) + min 
    return Math.floor(valor)
}
const obj = { max: 50, min: 40}
console.log(rand(obj)) //usando um objeto 
console.log(rand({ min: 955 }))  //junto do operador destructuring se pode usar um outro recurso que é o parametro padrão 
console.log(rand({}))  //pode-se passar um objeto vazio
//console.log(rand())//passar numero randomico sem objeto nenhum, ocorre problema porque tentará desestruturar algo que está undefined ou nulo