// 4) Faça um algoritmo que leia dois valores inteiros A e B se os valores forem iguais deverá se
// somar os dois, caso contrário multiplique A por B. Ao final de qualquer um dos cálculos deve-se
// atribuir o resultado para uma variável C e mostrar seu conteúdo na tela.



let a = 20;
let b = 3;
let c = 0;

if (a === b) {
    c = a + b; 

    document.write("Igual: ", c);
} else {
    c = a * b;

    document.write("Diferente: ", c);
}
