let = 3 //local dentro desse arquivo, não é exportado, não fica no global
global.b = 123
this.c = 456 //exportar esse valor pra fora do arquivo
this.d = false
this.e = 'teste'

//o this é module.exports 

console.log(this.c)

//DENTRO DE Node cada arquivo é um módulo diferente, cada arquivo representa um módulo.

console.log(this.a) //undefined
console.log(global.b) //o global dentro do Node ele equivale o objeto window, mudando o valor global ai será encontrado
console.log(module.exports.c) //o this é chamado de module exports
console.log(module.exports === this)
console.log(module.exports) //retorna um obj pra fora, 

//entenda os hantimes para programar melhor 
//fuja do escopo globaal
//não coloque variaveis no escopo global
//trabalhar com constantes 


