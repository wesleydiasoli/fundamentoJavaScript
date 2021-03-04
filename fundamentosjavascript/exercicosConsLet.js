/*
Wesley Dias De Oliveira tem 28 anos, pesa 84 kg
tem 1.8 de altura e su IMC é de 23
Wesley Dias nasceu em 1993
*/
const nome = 'Wesley Dias';
const sobrenome = 'Oliveira';
const idade = 28;
const peso = 75;
const alturaEmM = 1.80;
let indiceMassaCorporal; // peso / (altura * altura)
let anoNascimento;

indiceMassaCorporal = peso / (alturaEmM * alturaEmM);
console.log(indiceMassaCorporal);

indiceMassaCorporal = peso / (alturaEmM * alturaEmM);
anoNascimento = 2021 - idade;

console.log(anoNascimento);

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg`);
console.log(`tem ${alturaEmM} de altura e seu indice Massa Corporal é de  ${indiceMassaCorporal}`);
console.log(`${nome} nasceu em ${anoNascimento}.`);