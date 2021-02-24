//laço for, usado para repetição de passos,
//estruturas de controle para tomar uma decisão
//são códigos pra repetir essa ação
for (var i = 0; i < 10; i++) { //tem 3 partes: primeira var para declarar uma variável, condição para ficar repetindo esse bloco, incremento
    console.log(i)  //valor da variavel i será impresso 
}
console.log('1 =', i) //imprimir o valor da variavel i depois que o laço terminou, será o i vai ta disponivel? e se tiver disponivel qual será seu valor?
//vai estar disponivel porque o i foi declarado com a palavra reservada var, e o i não tem escopo de bloco, portanto o i está visivel dentro e fora do bloco
//o valor que fizesse ele sair do laço, 9 é menor do que e ainda continua em true, o i só sai do laço quando passa a ser 10 e i passa ser 10 e fica falso e imprime o valor  
//está repetindo o valor de i, pra cada nova repetição o i será incrementado 0 1 2...quando i tiver valor=10 e 10 for menor do 10 será uma expressão falsa, ele sai do laço e continua
//mesmo num contexto de laço a variavl var é importante 