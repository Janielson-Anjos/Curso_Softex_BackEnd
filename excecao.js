const readline = require("readline-sync");

let num1 = readline.questionInt("Digite o dividendo: ");
let num2 = readline.questionInt("Digite o divisor: ");

try {
    let resultado = num1/num2;
    if(num2 == 0) throw "Divisão por zero!"
    else console.log(`A divisão de ${num1} por ${num2} é ${resultado}`);
} catch (error) {
    console.log("Ocorreu um erro: " +error);
}finally{
    console.log("Encerrando o programa......");
}