///////////////////////////////// RECURSIVIDADE ////////////////////////////////////////


const readline = require('readline-sync');

// let numero = readline.questionInt("Digite o numero para o fatorial: ");


//  function fatorial(n) {
//     if (n === 0 || n === 1){
//     return 1;
//     } else {
//         return n * fatorial(n -1);
//     }
//  }


//  console.log(`O fatorial de ${numero} é ${fatorial(numero)}`);


// function somarRecursiva(n) {
//     if (n === 1) {
//         return 1;
//     } else {
//         return n + somarRecursiva(n - 1);
//     }

// }

// let numero = readline.questionInt("Digite o numero para somar: ");

// console.log(`A soma recursiva de ${numero} é:  ${somarRecursiva(numero)}`);


function fibonacci(n) {
    if (n <= 1) {
        return n;
    }
    else {
        return (fibonacci(n - 1) + fibonacci(n - 2));
    }
}

let numero = readline.questionInt("Digite o numero: ");

console.log(`O fibonacci de ${numero} é: ${fibonacci(numero)}`);

