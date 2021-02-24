var funcs = []

for (var i=0; i < 10; i++) {
    funcs.push(function() {
        console.log(i)
    })
}
funcs[2]()
funcs[8]()

//array vazio, declarando esse array com var
//vai de 0 até 9 incrementando de 1 em 1, até que o i fique igual a 10 ai ele sai do laço
//dentro do laço preencher o array com funções, push add novo elemnto no array, e add uma função anônima e depois será referenciada a partir do array
//pra cada interação, na primeira interação i=0 e vai add uma nova função nesse array e vai imprimir a variavel que nesse contexto a variavel é i e irá fazendo isso pra cada uma das funções quando terminar o laço chamar funcs
//chamar a função no indice 2, 1ual será o valor de i?
//impresso no console quando chamar o indice do array
//será que vai o mesmo valor ou valores diferentes
//a variavel não tem escopo de bloco e quando executar o console o valor será 10 pra qualquer chamada