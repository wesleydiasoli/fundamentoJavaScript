//let é a variavel
//1 para representar valor boolenao
//1 é numérico e como transformar esse valor em verdadeiro ou falso?
//pode-se usar a negação ! = not, negação lógica
//se usar a negação duas vezes o valor volta para o original
let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

//saber se o valor numérico 1 é verdadeiro ou falso
isAtivo = 1
console.log(!!isAtivo)
//o valor 1 se comporta como verdadeiro fazendo a negação duas vezes 

//!!true=false
//!true=verdadeiro
//!!false=falso
//!false=verdadeiro
//!!forma de teste pra volores se são verdadeiro ou falso
console.log('os verdadeiros...')
console.log(!!3)
console.log(!!-1)
console.log(' ')
console.log(!!{})
console.log(!!Infinity) //divisão por zero e se comporta como verdadeiro  
console.log(!!(isAtivo = true)) //valor é atribuido para a variavel é um valor resolvivel e retorna true
console.log(!!(isAtivo = Infinity)) 
console.log(!!(isAtivo = 0)) //retornara false, porque ele tá pegando o numero e não a atribuição

//para casos falso
console.log('os falsos...')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false)) //atribuição e o que tiver do lado direiro e que resolve pra false o resultado é false

console.log(!!('' || null ||  0 || ' ')) //|| = ou, pode se usar coisas que são verdadeiro ou falso e dependendo do que for poe retornar true or false 
let nome = 'lucas'
console.log(nome || 'desconhecido')//forma para obter um valor padrão de uma determinada variavel
