//IEEE 754-2008
let num1 = 0.7;
let num2 = 0.1;

//num1 = ((num1 * 100) + (num2 * 100)) / 100; //0.8 --- num1 = num1 + num2
num1 = Number(num1.toFixed(2));

//num1 = parseFloat(num1.toFixed(3));
//num1 = Number(num1.toFixed(3));
console.log(num1);
console.log(Number.isInteger(num1));//checar os binários se é um inteiro


//console.log(num1.toString() + num2);
//console.log(num1.toString(2));//para ver o number em forma de binário
//numero fossse uma uma string para concatenar
//um numero já tem algumas coisas associadas a ele
//fazer o numero parecer uma string
//num1 não foi alterado, continua sendo um number
//console.log(num1.toFixed(2));//arredondamento
//console.log(Number.isInteger(num1)); //para verificar numero inteiro
//let temp = num1 * '5'; //NaN 
//console.log(Number.isNaN(temp));//esse numero é um NaN? quando retornar false está correta
//console.log(temp);//junção dos valores, não caça contas com string

