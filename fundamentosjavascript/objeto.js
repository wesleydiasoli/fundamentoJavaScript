//um objeto em javascript não é a mesma coisa que um jason(formato textual), notação lietal de objetos, como objetos em JS de forma literal 
//par de chaves forma literal para representa um objeto
//objeto é uma coleçao de chave e valor, nome do atributo e passa-se um valor
//objeto pode ter um outro objeto
//um identificador unico dentro de um objeto (cahve)
//traś flexiblidade e dinâmica


const prod1 = {} //obj vazio de forma literal
prod1.nome = 'Celular ultra' //forma dinamica adicionar novos produtos
prod1.preço = 5000.97
prod1['Desconto'] = 0.5

const prod2 = {
    nome: 'Camisa polo',
    valor: 55.56,
 
}


console.log(prod2)