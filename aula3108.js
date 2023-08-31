const readline = require('readline-sync');

// let nome = readline.question("digite seu nome: ");
// let nota1 = parseInt(readline.question("digite a primeira nota: "));
// let nota2 = parseInt(readline.question("digite a segunda nota: "));
// let nota3 = parseInt(readline.question("digite a terceira nota: "));

// let media = (nota1 + nota2 + nota3) / 3;
// console.log(media);


///////////////////// ano bissexto /////////////////////


// let data = readline.question("digite o ano para verificar se é bissexto: ")

// if (data % 400 === 0 || data % 4 === 0 && data % 100 != 0) {
//     console.log(`O ano ${data} é um ano bissexto!`);
// } else{
//     console.log(`O ano ${data} não é um ano bissexto!`);
// }


///////////////////// exercicio 3 ////////////////////////

//////////////////////// preisa colocar o try catch ////////////////////
// let valor = parseInt(readline.question("digite o valor do produto: "));
// let estado = readline.question("digite o estado: \n");

// if (estado == "MG") {
//     var imposto = valor * 0.07;
//     var calculo = valor + imposto;
//     console.log(calculo);
// } else if(estado == "SP"){
//     var imposto = valor * 0.12;
//     var calculo = valor + imposto;
//     console.log(calculo);
// } else if(estado == "RJ"){
//     var imposto = valor * 0.15;
//     var calculo = valor + imposto;
//     console.log(calculo);
// }else if(estado == "MS"){
//     var imposto = valor * 0.08;
//     var calculo = valor + imposto;
//     console.log(calculo);
// }else {
//     console.log("Estado não esta na lista de estados válidos");
// }


/////////////////////// exercicio 4 //////////////////////

// let numPar = 0;
// let numParCont = 0;
// for (let i = 0; i <= 10000000000000 && numParCont <= 50; i++) {

//     if (i % 2 == 0) {
//         numPar = numPar + i;
//         numParCont++;
//     }
// }

// console.log(numPar);

// let numPar = 0;
// let numParCont = 0;
// let i = 0;

// while(i < Infinity && numParCont <= 50){
//     if(i % 2 == 0){
//         numPar = numPar + i;
//         numParCont++
//     }
//     i++;
// }
// console.log(numPar);

// let numPar = 0;
// let numParCont = 0;
// let i = 0;

// do {
//     if(i % 2 == 0){
//         numPar = numPar + i;
//         numParCont++
//     }
//     i++;
// } while (i < Infinity && numParCont <= 50);

// console.log(numPar);


/////////////////////// exercicio 5 /////////////////////////


// let pergunta = parseInt(readline.question("digite o numero: "));

// for(let i = 0; i <= pergunta; i++){
//     if(i % 2 != 0){
//         console.log(i);
//     }
// }

/////////////////////// exercicio 6 ////////////////////////


// let diasTrab = parseInt(readline.question("Digite os dias trabalhados: "));

// let valorDiaTrab = 30.00;

// function calculoValorPagar() {
//     let calculoDias = diasTrab * valorDiaTrab;
//     let imposto = calculoDias * 0.08;
//     let valorFinal = calculoDias - imposto;

//     console.log(`O valor a ser pago é R$ ${valorFinal},00`);
// }

// calculoValorPagar();

/////////////////////// exercicio 7 //////////////////////

//////////////////// falta terminar //////////////////
// let inicio = readline.question("Digite o horario de inicio: ");
// let duracao = readline.question("Digite a duração: ");

// let horas = inicio.split(":");

// horas[1] = number(horas[1]) + duracao;

// console.log(`${horas[0]}:${horas[1]}:${horas[2]}`);


//////////////////////// exercicio 8 ////////////////////////


// let valorHoraTrabalhada = 10.00;

// let valorHoraExtra = 15.00;


// let qtdeHoraTrabalhada = readline.question("Digite a quantidade de horas trabalhadas: ");
// let qtdeHoraExtra = readline.question("Digite a quantidade de horas extras trabalhadas: ");

// let horaTrabalhada = qtdeHoraTrabalhada * valorHoraTrabalhada;
// let horaExtra = qtdeHoraExtra * valorHoraExtra;

// console.log(`O salário anual é de R$ ${horaTrabalhada + horaExtra},00`);


////////////////////////////// exercicio 9 //////////////////////////////


// let num1 = parseInt(readline.question("digite o primeiro numero: "));
// let num2 = parseInt(readline.question("digite o segundo numero: "));
// let num3 = parseInt(readline.question("digite o terceiro numero: "));

// let ordem = [];

// ordem.push(num1,num2,num3);

// ordem.sort(function(a,b) {
//     if(a>b) return 1;
//     if(a<b) return -1;
//     return 0;
// });

// console.log(ordem);

///////////////////////////// exercicio 10 //////////////////////



