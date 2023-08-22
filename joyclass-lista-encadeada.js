function Pessoa(nome, idade, filho) {
    this.nome = nome;
    this.idade = idade;
    this.filho = filho;
}

var joao = new Pessoa("joao", 35, null);
var jose = new Pessoa("jose", 40, joao);
var maria = new Pessoa("maria", 45, jose);
var luiza = new Pessoa("luiza", 45, maria);

var lista = luiza;

var atual = lista;
while (atual != null) {
    console.log("Nome: " + atual.nome);
    console.log("Idade: " + atual.idade);
    console.log("Filho: " + (atual.filho ? atual.filho.nome : "Nenhum"));
    console.log("////////////////////////////////////////////////////////////  \n");
    atual = atual.filho;
}