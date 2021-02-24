const funcs = []

for (let i = 0; i < 10; i++) {
    funcs.push(function(){
        console.log(i)
    })
}
funcs[2]()
funcs[8]()
//o i tem escopo de bloco, a função aponta pro valor respectivo
//com uso do let que tem memória ele resolve o i
//função tem consciencia de local que foi definida 
