// 12) Escreva um algoritmo que leia o número de identificação, as 3 notas obtidas por um aluno nas
// 3 verificações e a média dos exercícios que fazem parte da avaliação, e calcule a média de
// aproveitamento, usando a fórmula:
// MA := (nota1 + nota 2 * 2 + nota 3 * 3 + ME)/7
// A atribuição dos conceitos obedece a tabela abaixo. O algoritmo deve escrever o número do aluno,
// suas notas, a média dos exercícios, a média de aproveitamento, o conceito correspondente e a
// mensagem 'Aprovado' se o conceito for A, B ou C, e 'Reprovado' se o conceito for D ou E.
// Média de aproveitamento Conceito
// >= 90 A
// >= 75 e < 90 B
// >= 60 e < 75 C
// >= 40 e < 60 D
// < 40 E 


let matricula = "378294";

let nota1 = 100;

let nota2 = 90;

let nota3 = 100;

let ME = 10;

const MA = (nota1 + nota2*2 + nota3*3 +ME)/7;

if(MA >= 90){

    console.log('Matricula: '+matricula  + ' Nota1 = '+nota1  + ' Nota2 = '+nota2 + ' Nota3 = '+nota3 + ' Média de Aproveitamento =' + MA + ' Média de exercicio = ' + ME + ' Aprovado conceito A')

}
if(MA>= 75 && MA<90){

    console.log('Matricula: '+matricula  + ' Nota1 = '+nota1  + ' Nota2 = '+nota2 + ' Nota3 = '+nota3 + ' Média de Aproveitamento =' + MA + ' Média de exercicio = ' + ME + ' Aprovado conceito B')

}

if(MA>=40 && MA<75){

    console.log('Matricula: '+matricula  + ' Nota1 = '+nota1  + ' Nota2 = '+nota2 + ' Nota3 = '+nota3 + ' Média de Aproveitamento =' + MA + ' Média de exercicio = ' + ME + ' Aprovado conceito C')

} 

if(MA<40){

    console.log('Matricula: '+matricula  + ' Nota1 = '+nota1  + ' Nota2 = '+nota2 + ' Nota3 = '+nota3 + ' Média de Aproveitamento =' + MA + ' Média de exercicio = ' + ME + ' Reprovado')

} 
