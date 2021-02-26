//array de uma posição e extrair dessa posição 
const [a] = [10]     //entre conchentes, uma poisição que não faz sentido definir um array literal, posução deposi de uma palavra reservada que define uma constante, então está usando um operador destructer, análisar em local o conchete foi usado pra saber se de fato está definindo um array ou se está usando o operdor destructer 
console.log(a) //criou uma variavel a que recebeu o primeiro elemento do array 

const [n1, , n3, , n5, n6 = 0] = [10, 7, 9, 8] //pode pular elementos e dar um valor padrão, criando varias variaveis apartir de uma unica chamada 
console.log(n1, n3, n5, n6) //o seis seria undefined mas como adotou um valor padrão ele assumiu zero
                            //tirar de dentro dessa estrutura e atribui para varias variaveis usando apenas uma unica atribuição, operador relacionado com operador de atribuição 

const [, [, nota]] = [[, 8, 8], [9, 6, 8]] //primeiro elemento foi ignorado, segundo elemento é um array e dentro desse array ignorando o primeiro elemento e pegando o segundo elemento 
console.log(nota) 