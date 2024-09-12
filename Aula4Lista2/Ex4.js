// 4: Dada uma palavra, escreva um código que conte quantas vezes a letra "qualquer letra" aparece usando um loop for. Ex
// "javascript", letra "a", 2 a resposta.

var prompt = require('prompt-sync')()

let palavra = prompt("Digite a palavra: ")
let letra = prompt("Digite a letra de verificação: ")

let contagem = 0 

for(let i = 0; i < palavra.length; i++){
    
    if(palavra[i] == letra){
        contagem++
    }
}

console.log(`A letra ${letra} aparece ${contagem} vez(es) na palavra ${palavra}`)
