/*
Faça um programa para calcular o valor gasto de uma viagem.
você terá 3 variáveis, sendo elas:
1- Preço do combustível;
2- Gasto médio de combustível do carro por KM;
3- Distância em km da viagem.

Imprima no console o valor que será gasto de combustível para fazer essa viagem.
*/
const precoCombustivel = 5.79;
const kmPorLitro = 10;
const distanciaKm = 1000;

let gasto = (distanciaKm / kmPorLitro) * precoCombustivel;

console.log (gasto.toFixed(2));