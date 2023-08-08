
//////////////////////////// FUNÇÕES /////////////////////////////////

// function saudacao(){
//     console.log('Ola mundo');
// }

// saudacao();


// function incrementar(x){
//     x++;
//     console.log(x);
// }

// var num = 1;

// incrementar(num);



// var readline = require('readline-sync');
// var nomePessoa = readline.question('digite seu nome: ');

// function saudar(nome){
//     console.log('olá, boa tarde ', nome);
// }

// saudar(nomePessoa);


// var readline = require('readline-sync');

// var nome = readline.question('digite seu nome: ');
// var idade = readline.question('digite sua idade: ');
// var dia = readline.question('digite o dia: ');
// var mes = readline.question('digite o mês: ');
// var ano = readline.question('digite o ano: ');


// function saudarPessoa(nome, idade, dia, mes, ano) {

//     console.log(`Olá, boa tarde  ${nome}, voce tem ${idade} anos, e sua data de nascimento é ${dia}/${mes}/${ano} !`);

// }

// saudarPessoa(nome, idade, dia, mes, ano);


// function saudacao(){
//     console.log(`Olá, mundo!`);
// }

// saudacao();

// function dobro(num){
//     console.log(num * 2);
// }

// dobro(4);

// function mostrarNumeros(num1, num2){
//     let inicio = num1;
//     let fim = num2;
//     let divisores;
//     let texto = '';
//     for(let contador = inicio; contador <= fim; contador++){
//         divisores = 0;
//         for(let aux = 1; aux<=contador; aux++){
//             if(contador % aux == 0){
//                 divisores++;
//             }if (divisores == 2){
//                 texto = contador;
//             }
//         }
//         console.log(texto);
//     }
// }


// function mostrarNumeros(num1, num2){
//     let inicio = num1;
//     let fim = num2;
//     let aux = 1;

//     for(let contador = inicio; contador<= fim; contador++){
//         if(contador % aux == 1 || contador % aux == contador  && aux <= fim)
//         console.log(contador);
//     }
// }

// mostrarNumeros(1,5);


function verificarPar(x){
    if(x % 2 == 0){
        console.log(`O numero ${x} é par`);
    }else{
        console.log(`O numero ${x} é impar`);
    }
}

let readline = require("readline-sync");

// let numero = readline.question('digite o numero para verificar se é par ou impar: ');

// verificarPar(numero);

let controle = 'n';


do{
    let numero = readline.question('Digite o numero para verificar se é par ou impar: ');
    verificarPar(numero)
    let prossegir = readline.question('deseja testar outro numero: S/N');
    controle = prossegir;

}while( controle == 's'){
    
}


// const minhaLista = [1,2,3,4,5];

// function imprimirLista(lista){
    
//     for(let i = 0; i <= minhaLista.length; i++){
//         let itemArray = minhaLista[i];
//         console.log(minhaLista[i]);
//     }
// }

// imprimirLista(minhaLista);





