  //são booleanos, simbolo pipe duas vezes, 
  //| pipe uma vez é a operação lógica(compara bit a bit usando ou, compara bit a bit usando i, ou exclusivo), || operação logicas
    //ou usa dois || pipes

function compras(trabalho1, trabalho2) {
    const comprarSorvete = trabalho1 || trabalho2 //operador lógico tipo ou
    const comprarTv50 = trabalho1 && trabalho2 //operador lógico tipi i
    //const comprarTv32 = !!(trabalho1 ^ trabalho3)
    const comprarTv32 = !trabalho1 != trabalho2 //ou exclusivo 
    const manterSaudavel = !comprarSorvete //operador unário

    return ( comprarSorvete, comprarTv50, comprarTv32, manterSaudavel ) //assim o ECMASCRIPT cria de forma reduzida, não precisa explicitamente ficar repetindo o nome da: o nome do valor pra apontar uma constante, e cria o objeto de forma reduzida, mas não deixa de ser chave valor, internamente o ECMA tá fazendo esse trbalho 

}

console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, true))
console.log(compras(false, false))

