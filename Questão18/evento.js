// Escrever um algoritmo que gera e escreve os números ímpares entre 100 e 200.


let numero = 102;

for(numero>100; numero <=200; i++){

    if(numero % 2 === 0 && numero<100) {
        console.log( numero + ' não é um número válido')
       
    }  else if ( numero<100 ) {
        console.log('numero invalido')

    } else{
        console.log(numero)
    }

    
}



 