const readline = require("readline-sync");

let rodar = true;

let gerador_matricula = 2;

const aluno1 = {
    matricula: 1,
    nome: "Jose Silva",
    notas: [8,7,6],
};

const aluno2 = {
    matricula: 2,
    nome: "Maria Alves",
    notas: [6,5,8],
};


const alunos = [aluno1, aluno2];




while (rodar) {
    console.clear();
    console.log("========== CADASTRO DE ALUNOS ==========");
    console.log("================== MENU ================");
    console.log(" ====== 0 - Sair do sistema ============");
    console.log(" ====== 1 - Listar todos os alunos =====");
    console.log(" ====== 2 - Cadastrar um novo aluno ====");
    console.log(" ====== 3 - Buscar um aluno ============");
    console.log(" ====== 4 - Alterar um aluno ===========");
    console.log("========================================");

    let opcao = readline.questionInt("Escolha a opção: ");

    switch (opcao) {
        case 0:
            console.log("Saindo da aplicação......");
            rodar = false;
            break;

        case 1:
            console.log("Listando todos alunos...... \n");
            console.log("==============================");
            
            for( const a of alunos){
                let soma = 0;
                console.log(`Matricula: ${a.matricula}`);
                console.log(`Nome do aluno: ${a.nome}`);
                for( let i = 0; i < a.notas.length; i++){
                
                    console.log(`\t- Nota ${i+1}: ${a.notas[i]}`);
                    soma = soma + a.notas[i];
                }
                let media = soma / a.notas.length;
                console.log(`\t- Média: ${media}`);
                console.log("-------------------------------------");
            }
            readline.keyInPause();
            break;

        case 2:

            let nomeAluno = readline.question("Digite o nome do aluno: ")
            let notasAlunos = [];

            for(let i = 0; i < 3; i++){
                notasAlunos[i] = readline.questionFloat(`Digite a nota ${i + 1}: `);

            }

            const aluno = {
                matricula: ++gerador_matricula,
                nome: nomeAluno,
                notas: notasAlunos,        
            };

            alunos.push(aluno);
            console.log("----------------------------------");
            console.log("Aluno cadastrado com sucesso!");
            console.log("----------------------------------");
            readline.keyInPause();
            break;

        case 3:
            let pesquisaMatricula = readline.questionInt("Digite a matricula do aluno que deseja buscar: ");
            for (const a of alunos){
                if (a.matricula == pesquisaMatricula){
                    console.log("Resultado da busca");
                    console.log("-------------------------------");
                    console.log(`Matricula: ${a.matricula}`);
                    console.log(`Nome: ${a.nome}`);
                    for( let i = 0; i < a.notas.length; i++){
                
                        console.log(`\t- Nota ${i+1}: ${a.notas[i]}`);
                    }
                    console.log("------------------------------------");
                    readline.keyInPause();
                }
            }

            break;

        case 4:
            let pesquisaAlterar = readline.questionInt("Digite a matricula do aluno que deseja buscar: ");
            for (const a of alunos){
                if (a.matricula == pesquisaMatricula){
                    console.log("Resultado da busca");
                    console.log("-------------------------------");
                    console.log(`Matricula: ${a.matricula}`);
                    console.log(`Nome: ${a.nome}`);
                    for( let i = 0; i < a.notas.length; i++){
                
                        console.log(`\t- Nota ${i+1}: ${a.notas[i]}`);
                    }
                    console.log("------------------------------------");
                    readline.keyInPause();
                }
            }
            break;

        default:
            console.log("Opção invalida.....");
            console.log("Escolha uma opção válida......");
            break;
    }

}


