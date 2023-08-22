//////////////////////////////// lista de objetos /////////////////////////////////////////////

// const usuarios = [
//     {nome: "Robinson", idade: 18},
//     {nome: "William", idade: 28},
//     {nome: "Janaina", idade: 19},
//     {nome: "Carla", idade: 25},
//     {nome: "Maíra", idade: 32},
//     {nome: "George", idade: 30},
//     {nome: "Camila", idade: 27},
// ];

// for(let i = 0; i < usuarios.length; i++){
//     console.log(`Nome: ${usuarios[i].nome}, Idade: ${usuarios[i].idade}`);
// }

////////////////////////////////////////////// for in /////////////////////////////////////////////////

// for (let item in usuarios) {
//     console.log(usuarios[item].nome);
//     console.log(usuarios[item].idade);

// }

///////////////////////////////////////////// for of ///////////////////////////////////////////////////

// for (let item of usuarios) {
//     console.log(item.nome);
//     console.log(item.idade);
// }



// const numeros = [150, 100, 200, 250, 50];

// for (let i in numeros) {
//     console.log(numeros[i]);
// }

// for (let i of numeros){
//     console.log(i);
// }

// const palavras = ["cadeira", "lapis", "caneta", "caderno", "mesa"];

// for(let i in palavras){
//     console.log(palavras[i]);
// }

// for (let i of palavras){
//     console.log(i);
// }

// const logicos = [true, false, false, true, true];

// for(let i in logicos){
//     console.log(logicos[i]);
// }

// for (let i of logicos){
//     console.log(i);
// }


//////////////////////////////////////////////// atividade da lista ////////////////////////////////////////////////////////////



// let numeros = [3,7,2,9,5];

// for (let numero of numeros){
//     console.log(numero);
// }



// const objeto = [
//     {a: 10},
//     {b: 20},
//     {c: 30},
//     {d: 40},
// ]

// let soma = 0;
// for(let numero in objeto){
//     soma = soma + numero;
// }

// console.log(soma);


// const numeros = [12, 5, 8, 21, 16, 7];
// let numerosPar = [];
// let numerosImpar = [];

// for(let numero of numeros){
//     if( numero % 2 == 0){
//         numerosPar.push(numero);
//     }else{
//         numerosImpar.push(numero);
//     }
// }

// console.log(`numeros pares: ${numerosPar}`);
// console.log(`numeros impar: ${numerosImpar}`);


// const estudantes = { alice: 18, bob: 20, carol: 19, david: 21 };

// for (let idade in estudantes) {
//     if (estudantes[idade] == 19) {
//         console.log(`${Object(idade)} tem a idade de ${estudantes[idade]} anos`);
//     }
// }


const pontos = [
    [2, 5, 8],
    [3, 9, 12],
    [4, 6, 10]
];

let soma = 0;

// for (let i in pontos){
//     for(let j of pontos[i]){
//         soma = soma + j;
//     }
// }

for (let linha = 0; linha < pontos.length; linha++){
    for(let coluna = 0; coluna < linha.length; coluna++){
        soma = soma + linha[coluna];
    }
}

console.log(soma);