const resultado = nota => nota >= 7 ? 'Aprovado' : 'Reprovado' //função arrow junto com o operador ternário, fica bem pequena.

console.log(resultado(7.1))
console.log(resultado(6.7))

//operador ternário é composto por 3 partes, a 1.a sempre vai retornar verdadeiro ou falso, vai retornar se a expressão for verdadeira, retornará caso a expressão da 1.a parte 