//comparação é o resultado será true ou false
//operadores relacionais sendo usado usado em laços, testes condicionais
//na hora de comparar, saber se são valores com tipos diferentes, ou de forma mais precisa valores e tipos iguais

console.log('01)', '1' == 1) //String é extritamente igual a 1. o 1 = é simbolo de atribuição, == é um operador relacional compara a igualde entre 2 coisas, tbm 'eum operador binário
                            // nesse caso está sendo comparado o valor e não o tipo
console.log('02)', '1' === 1)// 1 é estritamente igual a 1? não, pq um é string e outro 1 é um number
console.log('03)', '3' != 3)//3 é diferente de 3? false, pq está levando em concideração o valor
console.log('04)', '3' !== 3)//true pq é estritamente number

console.log('05)', 3 <2)
console.log('06)', 3 > 2)
console.log('07)',  3<= 2)
console.log('04)', 3 >= 2)

const d1 = new Date(0)
const d2 = new Date(0)
console.log('09', d1 === d2)//comparando o endereço de memória, vai dar false
console.log('10', d1 == d2) 
console.log('11)', d1.getTime() === d2.getTime()) //é true, pq está comparando um number, getTime tem o mesmo tipo e mesmo valor
console.log('12)', undefined == null)
console.log('13)', undefined === null) //melhor usar o estritamente igual, pra evitar confusões com os tipos de mesmo valor.

