// 9. Faça um programa que leia um valor e mostre todos os valores inteiros entre 1 (inclusive) e o valor lido (inclusive). Considere que
// o valor lido será sempre maior que ZERO.

var prompt = require('prompt-sync')()

let valor = Number(prompt('Digite um número maior que 0: '))

while (valor <= 0) {
    console.log('Digite valor válido. Maior que 0!')
    valor = Number(prompt('Digite um valor maior que 0!: '))
}


for (let i = 1; i <= valor; i++) {
    console.log(i)
}
