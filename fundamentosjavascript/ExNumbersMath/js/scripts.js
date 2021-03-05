const numero = Number(prompt ('Digite um número: ')); //essa função promp sempre retorna uma string, fazer a conversão para um número
//pega a variavel e depois converter para um numero
const numeroTitulo = document.getElementById('numero-titulo');  //DOM object model, notação cammel casel
const texto = document.getElementById('texto'); 
//alterar o HTML interno dessas constantes
//fazer para um elemento especifico da pag

numeroTitulo.innerHTML = numero;
texto.innerHTML = ''; //vai limpar a div
texto.innerHTML += `<p>Raiz quadrada: ${numero ** 0.5}.</p>`;
texto.innerHTML += `<p>${numero} é inteiro: ${Number.isSafeInteger(numero)}.</p>`;
texto.innerHTML += `<p>Arredondando pra baixo: ${Math.floor(numero)}.</p>`;
texto.innerHTML += `<p>Arredondando pra cima: ${Math.ceil(numero)}.</p>`;
texto.innerHTML += `<p>Com duas casas decimais: ${numero.toFixed(2)}.</p>`;
