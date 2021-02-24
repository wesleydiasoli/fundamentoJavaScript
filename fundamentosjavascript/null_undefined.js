//nulo é um conceto que estrapola a linguagem, atribuição por valor e por referência

//tipos primitivos cópia do valor é passado pra variavel
//obj em JS a varia apontam pra mesmo objeto
//referencia mais explicita quando se usa com objetos, funções
//uma referência que aponta pra um espaço de memória
//undefined: variavél não foi atribuida ou inicializada
//null, quando uma variável não tem nenhum valor e nem endereço, não aponta pra nenhum local de memória 
//tipos que são referência com endereço de memória, pode-se atribuir valor nulo
//para zerar uma referÊncia usar o null, caso queira zerar uma variavel


let valor
console.log(valor)

valor=null
console.log(valor)

const produto = {} //par de chaves objeto vazio
console.log(produto.preco) //produto não é nulo, o preço não está definido o preço dentro do produto
console.log(produto)

produto.preco = 7 //objeto é um conj de pares chaves e valor, e ir adicionando dinamicamente

produto.preco = undefined //evite atribuir undefined

console.log(!!produto.preco) //valor boolean e passar pra undefined
delete produto.preco //terá de volta um objeto vazio, forma pra tirar um atibuto é usar o delete
console.log(produto)//produto preço está undefined

produto.preço = null // sem preço, porém válido
console.log(!!produto.preço)//convertemdo esse preço para um boolean será false
console.log(produto)

//referencia e de valor, quando se tem uma passagem por valor uma atribuição por valor , faz uma cópia do valor e cada variavel ou valor tem seu valor constante se faz uma atribuição por referência, ou seja copiando o endereço d memória, as duas variaveis ou constantes passama a apontar pro mesmo lugar
//uma determinada variavel passe a apontar pra nenhum lugar da memória e não aponte pra nada, usar nulo, com cuidado não dá pra ascessar nenhuma função/atributo por exemplo toString 