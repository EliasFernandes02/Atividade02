// 5) Faça um algoritmo estruturado que leia uma quantidade não determinada de números positivos.
// Calcule a quantidade de números pares e ímpares, a média de valores pares e a média geral dos
// números lidos. O número que encerrará a leitura será zero.

//setando um valor x para um array
let array= [1,2,3,4,5,6,7,8,9,10];

//setando as variaveis
let quantidadePares = 0;
let quantidadeImpares = 0;
let somaPares = 0;
let somaTodos = 0;


//percorrendo um valor inical, parando quando o i for menor que o tamanho do array e adicionando.
for (let i = 0; i < array.length; i++) {

    let valorVez = array[i]

    somaTodos = somaTodos + valorVez;

    if (valorVez % 2 == 0){
        quantidadePares++;
        somaPares = somaPares + array[i]
    }else {
        quantidadeImpares++
    }



}


//consoles para visualizar na tela os valores
console.log(quantidadePares)
console.log(quantidadeImpares)

console.log(somaPares / quantidadePares)
console.log(somaTodos / array.length)
