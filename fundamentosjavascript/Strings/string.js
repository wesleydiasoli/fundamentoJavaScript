//cadeia de caracteres delimitada por '' / "", usando uma função para manipular os caracteres 
//charAt vai mostrar a string de acordo com o numero escohido
const escola = "Cod3r"

console.log(escola.charAt(3))

// de acordo com a tabela uniCode pode se saber o numero da string
console.log(escola.charCodeAt(3))

//para buscar o a string associada ao index

console.log(escola.indexOf('3'))

//substring irá mostrar a partir da primeira string em diante

console.log(escola.substring(2))

//(0, 3) irá do zero ao 3 sem mostrar o indice 3, vá do indice zero e me dê 3 caracteres
console.log(escola.substring(0, 3))

//concatenação com literal
// o + no contexto de string ela irá conctenar 

console.log('Escola '.concat(escola).concat("!"))
console.log('Escola ' + escola + "!")
//replace é substituir, no caso um número por letra
console.log(escola.replace(3, 'e'))

//pegar um string separado por virgular e converter para um array, basta chamar a função split e passa o que se usar como separador
console.log('Ana,Marta,Pedro'.split(','))

