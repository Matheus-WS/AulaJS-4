// 2: Imprimir um Triângulo de Asteriscos com 4 Linhas

var prompt = require ('prompt-sync')()

let linhas = Number(prompt("Digite um numero: "))


for (let i = 1; i <= linhas; i++) {
    let linha = '';

    
    for (let j = 1; j <= (linhas - i); j++) {         // Adiciona espaços à esquerda
        linha += ' ';
    }

    for (let k = 1; k <= (2 * i - 1); k++) {
        linha += '*';
    }

    console.log(linha);
}
