// 2: Imprimir Todos os Números de 1 a 30, Exceto os Múltiplos de 4

let num = 1;

while (num <= 30){
    if (num % 4 == 0){
        num++;
        continue;
    }
    if (num == 30){
        console.log("Numero 30 encontrado, interrompendo o loop");
        break;
    }
    console.log(`Numero: ${num}`);
    num++;
}
