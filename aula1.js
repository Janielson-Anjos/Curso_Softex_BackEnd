
// let idade = 18;

// if(idade >= 18){
//     console.log('pode dirigir');
// }else if(idade >= 16){
//     console.log('pode dirigir com autorização dos pais');
// }else{
//     console.log('nao pode dirigir');
// }




// atividade aula 1

// const dia = 12;

// switch( dia ){

//     case 1:
//         console.log('domingo');
//         break;
//     case 2:
//         console.log('segunda');
//         break;
//     case 3:
//         console.log('terça');
//         break;
//     case 4:
//         console.log('quarta-feira');
//         break;
//     case 5:
//         console.log('quinta-feira');
//         break;
//     case 6:
//         console.log('sexta-feira');
//         break;
//     case 7:
//         console.log('sabado');
//     default:
//         console.log('digite um dia valido');
// }


// var mes = 5;

// switch (mes){

//     case 1:
//         console.log('janeiro');
//         break;
//     case 2:
//         console.log('fevereiro');
//         break;
//     case 3:
//         console.log('março');
//         break;
//     case 4:
//         console.log('abril');
//         break;
//     case 5:
//         console.log('maio');
//         break;
//     case 6:
//         console.log('junho');
//         break;
//     case 7:
//         console.log('julho');
//         break;
//     case 8:
//         console.log('agosto');
//         break;
//     case 9:
//         console.log('setembro');
//         break;
//     case 10:
//         console.log('outubro');
//         break;
//     case 11:
//         console.log('novembro');
//         break;
//     case 12:
//         console.log('dezembro');
//         break;
// }

// var estadoCivil = 'outro';

// switch(estadoCivil){
    
//     case 'solteiro':
//         console.log('Solteiro');
//         break;
//     case 'casado':
//         console.log('Casado');
//         break;
//     case 'divorciado':
//         console.log('Divorciado');
//         break;
//     case 'outro':
//         console.log('Outro');
//         break;
//     default:
//         console.log('Estado civil não reconhecido');
//         break;
// } 

// var animal = 'outro';

// switch (animal) {
//     case 'cachorro':
//         console.log('Cachorro');
//         break;
//     case 'gato':
//         console.log('Gato');
//         break;
//     case 'pássaro':
//         console.log('Pássaro');
//         break;
//     case 'outro':
//         console.log('Outro');
//         break;

//     default:
//         console.log('Animal não identificado');
//         break;
// }

var num1 = 2;
var num2 = 3;

var operacao = 'divisão';

switch (operacao) {
    case 'soma':
        console.log(num1 + num2);
        break;
    case 'subtração':
        console.log(num1 - num2);
        break;
    case 'multiplicação':
        console.log(num1 * num2);
        break;
    case 'divisão':
        console.log(num1 / num2);
        break;
    default:
        console.log('Operação invalida');
        break;
}