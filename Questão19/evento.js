// Escrever um algoritmo que leia um valor para uma variável N de 1 a 10 e calcule a tabuada de
// N. Mostre a tabuada na forma: 0 x N = 0, 1 x N = 1N, 2 x N = 2N, ..., 10 x N = 10N.



// No caso das questões o valor de N está na variável valor.

let valor = 8;


// pegando os valores de 1 até 10
for(let i = 0; i < 11; i++){

    document.write(valor + "x" + i + " = " +(valor*i) + "<br>");
}