// 11) Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço
// normal deetiqueta e a escolha da condição de pagamento. Utilize os códigos da tabela a seguir
// para ler qual acondição de pagamento escolhida e efetuar o cálculo adequado.
// Código Condição de pagamento
// 1 À vista em dinheiro ou cheque, recebe 10% de desconto(cond1)
// 2 À vista no cartão de crédito, recebe 15% de desconto(cond2)
// 3 Em duas vezes, preço normal de etiqueta sem juros(cond3)
// 4 Em duas vezes, preço normal de etiqueta mais juros de 10% (cond4)


// ***As variáveis cond estão definidas no final de cada linha do enunciado da questão***



let valorProduto = 200;


let cond1 = false;
let cond2 = false;
let cond3 = false;
let cond4 = true;

if(cond1===true) {
    valorFinal = valorProduto*0.9;

    console.log(valorFinal)
}

 if(cond2===true){
    valorFinal = valorProduto*0.85;

    console.log(valorFinal);

}  
 if(cond3===true){
    valorFinal = valorProduto/2  ;

    console.log("Duas parcelas de: " + valorFinal + " totalizando : " + (valorFinal*2) );
}

 if(cond4===true) {

    valorFinal = (valorProduto * 1.1)/2;

    console.log("duas parcelas de : " + valorFinal + " Totalizando : " + (valorProduto * 1.1))

}