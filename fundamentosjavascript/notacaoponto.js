//notação ponto
//criar uma função
//definir um atributo interno dessa função
//ascessando usando a notação ponto
console.log(typeof console) //notação ponto pra ascessar a função log. O console dentro do JS é um objeto 
console.log(Math.ceil(6.17)) //operar um aredondamento, ceil é teto, arredonda pra cima, Math é um object usa a notação ponto pra acessar uma função definida dentro desse objeto

const obj1 = {}//crou-se uma constante 
obj1.nome = 'Bola'//criar dinamicamente um atributo dentro de um objeto, pode-se usar a notação ponto, mesmo que o atributo não esteja no objeto, pode-se colocar objeto + ponto o nome do atributo recebe alguma coisa ele cria dinamicamente esse atributo 

console.log(obj1.nome) 

function Obj (nome) { //recebi como parametro dessa função (nome)
    this.nome = nome //o nome associado ao objeto que for criado a partir dessa função 
                        //instanciar uma função, ficará público usando o this
}                       //dentro da função Obj posso expor otras funções

const obj2 = new Obj('Cadeira')//se não passa o parametro retornará undefined, a string cadeira que será atribuida this.nome
const onj3 = new Obj('Mesa')
console.log(obj2.nome)
console.log(onj3.nome)//ponto é a forma de acessar os menbros, atibutos, função, 


//apartir do this usando a notação ponto criar tanto atributos como funções que serão expostas pra fora dessa sua função quando ela for instanciada,
//usa-se notação ponto pra acessar os atributos que estão visiveis dentro de determinado objeto, seja usando a notação liberal, seja usando a partir de uma função, seja usando apartir de um objeto da própria API do JS