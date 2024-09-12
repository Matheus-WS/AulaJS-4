// 5: A copa do mundo ocorre de 4 em 4 anos, desde 1930, exceto nos anos de 1942 e 1946 (Segunda Guerra Mundial), repita a
// leitura de um ano até ser digitado 0. Informe para o ano digitado se é ou não ano de Copa do Mundo.

var prompt = require('prompt-sync')() 

let ano;

do {
    ano = Number(prompt("Digite um ano (ou 0 para sair): "), 10);

    if (ano === 0) {
        break;
    }
   
    if (ano < 1930) {
        console.log(`${ano} não é um ano de Copa do Mundo.`);
    }

    else if (ano === 1942 || ano === 1946) {
        console.log(`${ano} não foi ano de copa, pois estava acontecendo a Segunda Guerra Mundial.`);
    }

    else if ((ano - 1930) % 4 === 0) {
        console.log(`${ano} é um ano de Copa do Mundo.`);
    }
    else {
        console.log(`${ano} não é um ano de Copa do Mundo.`);
    }
} while (ano !== 0);


