let varA = 'A'; //b
let varB = 'B'; //c
let varC = 'C'; //a

[varA, varB, varC] = [varB, varC, varA]

console.log(varA, varB, varC);
/*const varATemp = varA;
varA = varB; //B
varB = varC; //C
varC = varATemp; //A

console.log(varA, varB, varC); //salva-se o valor da variavel em algum lugar, move-se outras variaveis e utiliza a variavel
*/