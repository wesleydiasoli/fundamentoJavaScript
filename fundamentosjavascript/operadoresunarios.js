//incremento e decremento
let num1 = 1
let num2 =  
num1++ //acrescenta pra 2
console.log(num1)
--num1 //operador com prefixada
console.log(num1) //subtraindo 1, prefixado tem uma précedencia maior, que outra.

console.log(++num1 === num2--) //o 1 valia e passou valer 2 por causa do incremento, num2 vale 2 e vai ser decrementado na hora de comparar
console.log(num1 === num2)
