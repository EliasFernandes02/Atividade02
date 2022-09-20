// 2) Desenvolver um algoritmo que leia a altura de 15 pessoas. Este programa deverá calcular e
// mostrar :
// a. A menor altura do grupo;
// b. A maior altura do grupo; 



let arrayAltura = [1.7, 1.71 ,1.72,1.73 ,1.74 ,1.75 ,1.8 ,1.81 ,1.82,1.83,1.84,1.85,1.86,1.87,1.88,1.89];

let alturaMaxima = 0;

let alturaMinima = 123456; //Altura minima inicial tem que ser alta, pois quando as verificações forem feitas ele achar um valor menor que este.

for(let index=0; index < arrayAltura.length; index++){ //setando o valor de index que seja menor que o tamanho do array e somando 1



let alturaAtual = arrayAltura[index];


//mostrara no console os valores de cada campo
console.log('index',index)
console.log('alturaAtual', alturaAtual)
console.log('alturaMaxima', alturaMaxima)
console.log('alturaMinima', alturaMinima)

if(alturaAtual > alturaMaxima) {
    console.log('Altura máxima mudou para', alturaMaxima = alturaAtual);

     // fazerá a verificação e se for válida ela passará a altura máxima para a altura atual

} if(alturaAtual<alturaMinima) {
    console.log('Altura minima mudou para', alturaMinima = alturaAtual);
     //fazerá a verificação e se for válida trocará a altura minima para a altura atual
} 
   

} 
