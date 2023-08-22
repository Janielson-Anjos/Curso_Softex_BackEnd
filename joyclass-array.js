let listaNomes = ['jose', 'maria', 'ana', 'joao', 'alex', 'lorena', 'jair', 'lu', 'jan', 'nira'];
let listaIdades = [18, 25, 14, 10, 22, 19, 15, 20, 29, 65];
let listaCores = ['azul', 'branco', 'amarelo', 'preto', 'vermelho', 'marron', 'verde', 'rosa', 'preto', 'azul'];

console.log(listaNomes, listaIdades, listaCores);

listaIdades.splice(1, 1, 24);
listaCores.splice(6, 1, 'prata');

console.log(listaNomes, listaIdades, listaCores);