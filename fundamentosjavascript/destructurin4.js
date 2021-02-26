function rand([ min = 0, max = 1000]) { //substituir as chaves pelos conchetes
    if (min > max) [min, max] = [max, min]// uma forma de inverter é usando o operador destructing invertendo os operadores
                                        //o que é minimo passa a ser max e o max passa a ser min, criando um array com os dois atributos que foram desestruturados de um array e criando um novo array usando uma operação, depois de estruturado se recebe dois atributos min e max, invertendo as duas variaveis, 
    
    
     const valor = Math.random() * (max - min) + min  ////min pra poder descolar o intervalo e dar e ta sempre o valor min e max
     return Math.floor(valor) //floor pra arredondar pra baixo

}                           
    console.log(rand([50, 40])) //fazer o teste chamando essa função de varias formas, chamando a parte de um array               
    console.log(rand([1992]))