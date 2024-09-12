// 1: Encontrar o Fatorial de qualquer número.
var prompt = require ('prompt-sync')()

let n = Number(prompt("Digite um numero:"));

let resultado = 1;
   
    for (let i = 1; i <= n; i++) {
        resultado *= i;
    }

    console.log(`Fatorial de ${n} é ${resultado}`);
