// 13. Faça um programa que leia a quantidade de alunos em uma turma. Após, leia as notas desses alunos, calcule e mostre a média
// aritmética dessas notas
var prompt = require('prompt-sync')()

let alunos = Number(prompt('Digite a quantidade de alunos na turma: '))

if (alunos <= 0) {
    console.log('A quantidade de alunos deve ser um número positivo.');
} else {
   
    let soma = 0;

       for (let i = 1; i <= alunos; i++) {
       
        let nota = Number(prompt(`Digite a nota do aluno ${i}: `));
       
        soma += nota;
    }

    const media = soma / alunos;

    console.log(`A média aritmética das notas é: ${media.toFixed(2)}`);
}
