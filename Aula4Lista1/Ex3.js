// 3: Calcular a Soma dos Números Ímpares de 1 a 50
let soma = 0; 
for (let i = 1; i <= 50; i++) {
    if (i % 2 !== 0) {  
        soma += i;  
    }
}

console.log(soma);  
