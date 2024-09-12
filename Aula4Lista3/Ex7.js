// 7. Acrescente uma mensagem de ‘VALOR INVÁLIDO’ no exercício 6, caso o segundo valor informado seja ZERO.
var prompt = require('prompt-sync')();


let valor1 = Number(prompt('Digite o primeiro valor: '))
let valor2 = Number(prompt('Digite o segundo valor: '))
while (valor2 === 0) {
    console.log('VALOR INVÁLIDO')
    valor2 = Number(prompt('Digite o segundo valor: '))
}
const resultado = valor1 / valor2


console.log(`O resultado da divisão é: ${resultado.toFixed(2)}`)