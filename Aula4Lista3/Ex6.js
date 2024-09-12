// 6. Escreva um algoritmo para ler 2 valores e imprimir o resultado da divisão do primeiro pelo segundo. Se o segundo valor
// informado for ZERO, deve ser lido um novo valor.


var prompt = require('prompt-sync')();


let valor1 = Number(prompt('Digite o primeiro valor: '))
let valor2 = Number(prompt('Digite o segundo valor: '))
while (valor2 === 0) {
    console.log('O segundo valor não pode ser zero. Por favor, digite um novo valor.')
    valor2 = Number(prompt('Digite o segundo valor: '))
}
const resultado = valor1 / valor2


console.log(`O resultado da divisão é: ${resultado.toFixed(2)}`)
2