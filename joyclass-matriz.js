let notas = [
    [5.5, 7.9, 7.1],
    [7.0, 3.5, 9.0],
    [8.6, 7.3, 8.8]
]

function calcularMedia(notasArray) {
    let soma = 0;
    for (let nota of notasArray) {
        soma += nota;
    }
    return soma / notasArray.length;
}

let mediaAlunos = [];
for (let i = 0; i < notas.length; i++) {
    let mediaAluno = calcularMedia(notas[i]);
    mediaAlunos.push(mediaAluno);

}




console.log('Notas:');
console.log(notas);
console.log("Media de cada aluno:");
console.log(mediaAlunos);
console.log("Media de cada disciplina:");
console.log(mediaDisciplinas);




let animais = [
    ["animal 1", "animal 2", "animal 3" ]
    ["gato", "Cachorro", "Hamster" ]
    ["Siamês", "Pitbull", "Dourado" ]
    ["2", "4", "1" ]
]



























