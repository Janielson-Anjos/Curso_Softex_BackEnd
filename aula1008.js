// let nomeEntrada = 'jan';
// let numeroEntrada = 5;

// function exibirSaudacao(nome, saudacao='Olá'){
//     console.log(`${saudacao}, ${nome}`);
// }

// exibirSaudacao(nomeEntrada);
// incrementarNumero(numeroEntrada);
// subtrairNumero(numeroEntrada);

// function incrementarNumero(num){
//     let numIncrementado = num + 1;
//     console.log(`Seu numero antigo é ${num}, seu numero após imcrementar é ${numIncrementado}`);
// }

// function subtrairNumero(num2){
//     let numSubtraido = num2 - 1;
//     console.log(`Seu numero antigo é ${num2}, seu numero após subtrair é ${numSubtraido}`);
// }

// let nomeUsuario = 'jan';

// saudacao(nomeUsuario);


// function saudacao(nome='Usuário') {
//     console.log(`Olá, ${nome}`);
// }

const readline = require("readline-sync");


// let numero1 = readline.question('Digite o primeiro numero: ');
// let numero2 = readline.question('Digite o segundo numero: ');
// let operacao = readline.question('Digite o sinal da operação: ');


// calculadora(numero1, numero2, operacao);

// function calculadora(num1, num2, ope="+"){
//     let resultado;
//     switch (ope) {
        
//         case "+":
//             resultado = num1 + num2;
//             console.log(`O resultado da adição foi ${resultado}`);
//             break;
        
//         case "-":
//             resultado = num1 - num2;
//             console.log(`O resultado da subtração foi ${resultado}`);
//             break;
        
//         case "*":
//             resultado = num1 * num2;
//             console.log(`O resultado da multiplicação foi ${resultado}`);
//             break;
        
//         case "/":
//             resultado = num1 / num2;
//             console.log(`O resultado da divisão foi ${resultado}`);
//             break;
        
//         default:
//             break;
//     }

// }


// let numeroInserido = readline.question('Digite o numero para a contagem regressiva: ');

// contagemRegressiva(numeroInserido);

// function contagemRegressiva (num){
    
//     for(let i = num; i >= 1; i--){
//         console.log(i);
//     }
        
// }

// let nomeUsuario = readline.question('digite seu nome: ');
// let idadeUsuario = readline.question('digite sua idade: ');
// let profissaoUsuario = readline.question('digite sua profissão: ');

// apresentacao(nomeUsuario);

// function apresentacao(nome='usuario', idade='+18', profissao='desempregado'){
//     if (nomeUsuario == '' || idadeUsuario == '' || profissaoUsuario == '') {
//         console.log(`Olá, eu sou ${nome}, tenho ${idade} anos e sou ${profissao}.`);
        
//     }else{
//     console.log(`Olá, eu sou ${nome}, tenho ${idade} anos e sou ${profissao}.`);
//     }
// }


// let mensagem = readline.question("Digite o texto:");
// let estiloTxt = readline.question("Digite o estilo do texto: ");



// mensagemPersonalizada(mensagem, estiloTxt)


// function mensagemPersonalizada(texto, estilo='normal'){

//     if(estilo == 'negrito'){
//         console.log(`worldString.italics(${texto})`)
//     }else if(estilo == 'italico'){
//         console.log(`<i>${texto}</i>`);
//     }else if(estilo == 'sublinhado'){
//         console.log(`${texto}`);
//     }

// }


//////////////////////////////// função com return //////////////////////////////////

// let nomeUsu = readline.question('digite o nome: ');

// console.log(criarMensagemDeSaudacao(nomeUsu));

// function criarMensagemDeSaudacao(nome) {
//     const mensagem = `Olá, ${nome}`;
//     return mensagem;
// }


// console.log(somar(1,2));

// function somar(num1, num2) {
//     const soma = num1 + num2;
//     return soma;
    
// }


// console.log(ehPar(3));


// function ehPar(num){
//     if (num % 2 == 0){
//         return 'é par!';
//     }else{
//         return 'é impar';
//     }
// }

// console.log(maiorNumero(5,4,8))

// function maiorNumero(num1, num2, num3) {
    
//     if(num1 > num2 && num1 > num3){
//         return num1;
//     }else if(num2 > num3){
//         return num2;
//     }else{
//         return num3;
//     }

// }


// console.log(calcularIMC(75, 1.86));

// function calcularIMC(peso, altura) {
//     const imc = peso / (altura*altura);
//     return `Seu índice da massa corporal é ${imc}`;
// }


console.log(celsiusParaFahrenheit(20));

function celsiusParaFahrenheit(valor) {
    const calculo = (valor * 1.8) + 32;
    return `A temperatura em Fahrenheit é ${calculo}`;
}

