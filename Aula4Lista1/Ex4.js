// 4: Imprimir a Sequência de Fibonacci até o 10º Termo

const n = 10;

let a = 1;
let b = 1;

console.log(a); 
console.log(b); 

for (let i = 2; i < n; i++) {
    const c = a + b;
    a = b; 
    b = c; 
    console.log(c);
}
