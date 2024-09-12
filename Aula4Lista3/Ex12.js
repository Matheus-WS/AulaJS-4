// 12. Faça um programa para ler uma quantidade indeterminada de valores inteiros. Para cada valor fornecido, escreva uma
// mensagem que indica se cada valor é PAR ou ÍMPAR. O algoritmo será encerrado imediatamente após a leitura de um valor ZERO ou NEGATIVO.

var prompt = require('prompt-sync')()

while (true) {
   
    let valor = Number(prompt('Digite um valor inteiro (0 ou negativo encerra o programa): '))
   
    if (valor <= 0) {
        break;
    }
   
    if (valor % 2 === 0) {
        console.log(` ${valor} é par.`)
    } else {
        console.log(`${valor} é ímpar.`)
    }

}