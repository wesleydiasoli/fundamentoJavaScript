//par nome/valor
const saudacao = 'Opa' //declarando uma constante ou variavel, definida dentro de um contexto léxico (local no qual a variavel foi definida fisicamento no código)

function exec() {
    const saudacao = 'Fala' //a chave/nome (saudação) string (fala), outro contexto léxico a constante foi definida dentro de uma função, defini-se um contexto especifico dessa função
    return saudacao //como estão em contexto diferentes não gera conflito. o saudação do return vai procurar no contexto da função, se achar ele já resolve, se ele não achar vai pegar do contexto maior 

} 
//objetossão grupos aninhados de pares nome/valor
const cliente = {
    nome: 'pedro',
    idade: 32,
    peso: 90,
    endereço: { //outro obj, então outra coleção de par chave/valor
        logradouro: 'Rua muito legal',
        numero: 123
    }
}
//criou-se um obj usando a notação literal de objetos (par/chave valor)
//contexto do objeto cliente e outro contexto do objeto endereço

console.log(saudacao)
console.log(exec()) //chamar a função exec e o resultado dessa função vai retornar a variavel definida com o mesmo identificador da de fora, mas como são contexto léxicos diferentes vai retornar outro valor
console.log(cliente)//obj que criamos uma coleçao de chaves e valores aninhadas 