console.log(typeof Object) //se trata de uma função
console.log(typeof new Object) //objeto criado a partir de uma função
//fazendo a mesma coisa com uma função que eu defini
//a função pode ser instanciada apartir da palavra reservada em new

const cliente = function() {}
console.log(typeof cliente)
console.log(typeof new cliente)
//criando classe
//criar instancias de funções que eu defini 
class produto {}// ES 2015 (ES6)
console.log(typeof produto) //uma forma diferente de construir uma função
//typeof de produto  por ser uma classe, internamente vai ser convertido pra uma função 
//da mesma forma, posso instancia uma função ele vai me retornar um objeto a partir da instancia da função
console.log(typeof new produto()) //a forma de criar obj é a partir de uma função, instaciar e obter as variaveis 
//a classe criada no JS internamente ela é uma função que exerce o papel de uma classe, que é definir o molde da estrutura, das classes, das funçoes, e consegue ir instanciando apartir da função
//criar classe e instanciar objeto a partir da classe, quem exerce isso é a função 
//funções podem ter atributos e comportamentos e podem ser instanciadas