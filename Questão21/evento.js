// Escreva um algoritmo que leia um valor inicial A e uma razão R e imprima uma seqüência em
// P.G. contendo 10 valores.


let valor = 10;
let razao = 3;
let pg=0;

for(let i=1; i<=10 ; i++){

 pg += "Termo "+ i +" = "+ valor + " ";

   valor = valor*razao  
   
   console.log(valor);


}
