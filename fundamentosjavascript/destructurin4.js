function rand([ min = 0, max = 1000]) { //substituir as chaves pelos conchetes
    if (min > max) [min, max] = [max, min]// uma forma de inverter é usando o operador destructing invertendo os operadores
                                        //o que é minimo passa a ser max e o max passa a ser min, criando um array com os dois atributos que foram desestruturados de um array e criando um novo array usando uma operação, depois de estruturado se recebe dois atributos min e max, invertendo as duas variaveis, 
    
    
     const valor = Math.random() * (max - min) + min  ////min pra poder descolar o intervalo e dar e ta sempre o valor min e max
     return Math.floor(valor) //floor pra arredondar pra baixo

}                           
    console.log(rand([50, 40])) //fazer o teste chamando essa função de varias formas, chamando a parte de um array, foi passado o max e dps o min        
    console.log(rand([1992])) //os intervalos entre esse e o valor de mil
    console.log(rand([, 10]))//min como zero
    console.log(rand([])) //array vazio irá passar os valores zero ou mil 
    console.log(rand()) //posso passar nada ai vai dar ruim, pq esta tentando desestruturar elementos de algo que é nulo undefined
    // tirar algo de objetos e arrays