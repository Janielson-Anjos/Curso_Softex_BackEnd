const readline = require("readline-sync");

function Banco(conta, saldo, tipoDeConta, agencia){
    this.conta = conta;
    this.saldo = saldo = 0;
    this.tipoDeConta = tipoDeConta;
    this.agencia = agencia;


    mostrarSaldo = function saldoValor(){
        console.log(this.saldo);
    }

    deposito = function addValor(){
        saldoParaAdd = readline.questionFloat("digite o valor do deposito: ");
        this.saldo = this.saldo + saldoParaAdd;

    }

    retirarDinheiro = function sacar(){
        valorParaSacar = readline.questionFloat("Digite o valor que deseja sacar: ");
        this.saldo = this.saldo - valorParaSacar;
    }

    numConta = function numeroDaConta() {
        console.log(this.conta);
    }
}



