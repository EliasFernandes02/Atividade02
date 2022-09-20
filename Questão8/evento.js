// 8) Escreva um algoritmo que leia três valores inteiros e diferentes e mostre-os em ordem decrescente. 

let num1 = parseInt(19);
let num2 = parseInt(15);
let num3= parseInt(18);

let aux = num1;

if(num2 > num1){

 aux=num2;
 num2=num1;
 num1=aux;

}

if(num3 > num1){

 aux=num3;
 num3=num1;
 num1=aux;

}

if(num3 > num2){

 aux=num3;
 num3=num2;
 num2=aux;
 
}
console.log(num1+"-"+num2+"-"+num3);

