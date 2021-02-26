//novo recurso do ES2015
const pessoa = {
    nome: 'Wesley',             //apartir do objeto pessoa extrair a variavel nome, idade
    idade: 5, 
    endereço: {
        logradouro: 'Rua abc',
        numero: 8000
    }
}
                                //forma simplicada tirar de dentro de uma estrutura (objeto) atributos
const { nome, idade} = pessoa   //{} representa o operador de desistrução
                                //tire de dentro do objeto o atributo nome e idade, o objeto pessoa
console.log(nome, idade)        //caso queira mudar o nome da variavel, 

const { nome: n, idade: i} = pessoa
console.log(n, i)               //tire da estrutura o objeto os atributos e crie variaveis 
                                //se tirar um atributo que não existe dentro do objeto
const { sobrenome, bemhumorada = true } = pessoa
console.log(sobrenome, bemhumorada) //undefined é uma forma do JS me diz que uma variavel nunca existiu dentro do objeto
                                    
const { endereco: { logradouro, numero, cep } } = pessoa 
console.log(logradouro, numero, cep)