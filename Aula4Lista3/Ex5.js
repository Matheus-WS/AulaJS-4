// 5. Escreva um algoritmo para ler 2 notas de um aluno, calcular e imprimir a média final. Logo após escrever a mensagem "Calcular a média de outro aluno? 1. Sim 2. Não" e solicitar uma 
//resposta. Se a resposta for 1, o algoritmo deve ser executado novamente, caso contrário deve ser encerrado.
var prompt = require('prompt-sync')()

let nota,nota2,nota3, resp

    do {
        nota = Number(prompt("Insira a primeira nota: "))
        nota2= Number(prompt("Insira a segunda nota: "))
        nota3 = Number(prompt("Insira a terceira  nota: "))


        media = (nota + nota2 + nota3)/3


        console.log(`á media do aluno foi ${media.toFixed(2)}`)


        resp = Number(prompt("deseja calcular outra nota: (1- Sim 2-Não)"))
    }
   
    while(resp == 1)