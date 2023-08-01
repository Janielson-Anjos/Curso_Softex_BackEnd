// const meuArray = [10,20,30,40,50];

// var segundoElemento = meuArray[1];
// console.log(segundoElemento);
// var numPossui = meuArray.indexOf([25]);

// if (numPossui!=0){
//     console.log('não tem o numero');
// }else{
//     console.log('possui o numero');
// }


// const frutas = ['maça', 'banana', 'laranja', 'uva', 'manga'];
// console.log(frutas.length);

// frutas.push = ['pera'];
// console.log(frutas);

// frutas.splice(0, 1);
// console.log(frutas);


// const array1 = [1,2,3,4,5];
// const array2 = [6,7,8,9,10];
// const array3 = array1.concat(array2);
// console.log(array3);

// const numeros = [1,2,3,4,5,6,7,8,9,10];

// function buscarNumerosPares (num){
//     if (num % 2 == 0) 
//     return num;
// }

// var numerosPares = numeros.filter(buscarNumerosPares);
// console.log(numerosPares);


// const numeros = [3,1,4,1,5,9,2,6,5,3,5];
// numeros.sort();
// console.log(numeros);

const frutas = ['maçã', 'banana', 'laranja', 'uva', 'manga'];
console.log(frutas.indexOf('laranja'));

let num = 1;

testandoArray(frutas);

function testandoArray(x) {
    var testeArray = Array.isArray(x);
    if (testeArray == true) {
        console.log('é uma array');
    } else {
        console.log('não é um array');
    }
}
