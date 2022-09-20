// 4) Escrever um algoritmo que leia uma quantidade desconhecida de números e conte quantos deles
// estão nos seguintes intervalos: [0-25], [26-50], [51-75] e [76-100]. A entrada de dados deve
// terminar quando for lido um número negativo.


let n = 1;
let c1 = 0;
let c2 = 0;
let c3 = 0;
let c4 = 0;



// Essa parte vai pegar todos os números até aparecer um negativo
while (n > 0){
    n = prompt("Digite um número");
}

if (n >= 0 && n <= 25){
    c1 = c1 + 1;
}

else if (n >= 26 && n <= 50){
    c2 = c2 + 1;
}

else if (n >= 51 && n <= 75){
    c3 = c3 + 1;
}

else if (n >= 76 && n <= 100){
    c4 = c4 + 1;
}


// Mostrar o console na tela
console.log('A quantidade de numeros entre 0 e 25 é: ' + c1 + ',' + 'entre 26-50 é:' + c2 + ' entre os votos 51-75: ' + c3 + 'entre os votos 76-100 é : ' + c4);



