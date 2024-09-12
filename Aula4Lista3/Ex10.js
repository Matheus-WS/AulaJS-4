// 10. Faça um programa que leia 10 valores, calcule e escreva a média aritmética desses valores.
var prompt = require('prompt-sync')()

let soma = 0

for (let i = 1; i <= 10; i++) {
   
    let valor = Number(prompt(`Digite o valor ${i}: `))
   
    soma += valor
}

const media = soma / 10

console.log(`A média aritmética dos valores é: ${media}`)