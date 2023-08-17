const readline = require('readline-sync');
// let rodar = true;



// while (rodar == true) {
//     try {

//         let questao = readline.questionInt('digite o numero para incrementar:  \n')
            
//             questao++;
//             console.log(questao);

//         let pergunta = readline.question('Deseja incrementar outro numero? S/N \n');
//         if (pergunta == 'n') {
//             rodar = false;
//         }
//     } catch (error) {
//         console.log('erro!');
//     }

// }


 

 try {
    let num = readline.questionInt('Digite o numero: ');
    if (num === 0){
        throw "erro de divisão por zero!";
    }
    console.log(num / 2);
 } catch (error) {
    console.error("erro: Divisão por zero");
 } finally{
    console.log("fechando programa!");
 }


 try {
    
 } catch (error) {
    
 }