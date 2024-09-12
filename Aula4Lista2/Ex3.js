//  3: Calcular a tabuada para qualquer número

var prompt = require ('prompt-sync')()

let num = Number(prompt("Digite um numero:"));

let i = 1

do{
    console.log(`${num} x ${i} = ${num * i}`);
    i = i + 1
}
while(i <= 10)