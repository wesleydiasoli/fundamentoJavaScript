//estrutara pra agrupamento, busca a variavel respectivamente com seu indicador
//forma de agrupar multiplo valores de forma linear como um vetor
//estrutura indexada, ascessa apartir de um numero
// push add novas funções
//pode-se misturar coisas dentro de um array
//idela é um array para cada tipo de dados homegêneos

const valores = [1, 2, 3, 4, 5, 5, 7, 8, 9]
 console.log(valores[0], valores[3])
 console.log(valores[1], valores[2])
 
 valores[4] = 4
 console.log(valores)
 console.log(valores.length)

 valores.push({id: 3}, false, null, 'teste')
 console.log(valores)

 console.log(valores.pop())
 delete valores[0]
 console.log(valores)

 console.log(typeof valores)
 //pop retira esse ultimo valor do array
 //uso dos conchetes tanto pra alterar ou adicionar um valor, para ler um valor
 //função delete, pra tirar um atributo dentro de um objeto
