const livro = {
    titulo: "1984",
    autor: "George Orwell",
    isDisponivel: false,

    checkin: function () {
        this.isDisponivel = true;
    },
    checkout: function () {
        this.isDisponivel = false;
    },
};




const readline = require('readline-sync');


let rodar = true;
while(rodar == true){
    
    let pergunta = readline.question("Digite o autor que deseja buscar: ");

    if (pergunta === livro.autor){
        console.log(livro);
    }else{
        console.log("Autor não encontrado");
    }

    let pergunta2 = readline.question("Deseja buscar outro autor? S/N ");
    if(pergunta2 == "n"){
        rodar = false;
    }

}


// if(livro.isDisponivel == true){
//     console.log(`livro ${livro.titulo} esta disponivel`);
// }else{
//     console.log(`O livro ${livro.titulo} esta indisponivel`);
// }