const readline = require("readline-sync")


class Carro{
    modelo = 'Honda';
    cor = 'preto';
    cambio = 'automatico';

    ligar(){
        console.log('Carro ligado!');
    }

    desligar(){
        console.log('Carro desligado!');
    }

    acelerar(){
        console.log('Acelerando carro!');
    }
}

class Celular {
    modelo = 'Iphone 12';
    sistema = 'IOS';
    cor = 'vermelho';

    chamada(){
        console.log('ligando para o contato!');
    }

    rastrear(){
        console.log(`Rastreando telefone modelo ${this.modelo} da cor ${this.cor}`);
    }

    desligar(){
        console.log('Desligando telefone!');
    }
}


class Estudante{
    nome = 'Jose';
    idade = 15;
    endereco = 'Avenida X';


    estudar(){
        console.log('Estudando...');
    }

    escrever(){
        console.log("estudante esté escrendo!");
    }

    prestarAtencao(){
        console.log('Estudante está prestando atenção');
    }

}

class Conta {
    nomeDoTitular = 'maria';
    tipoDeConta = 'Corrente';
    saldo = 0;

    depositar(){
        const valorDeposito = readline.question("Digite o valor de deposito:");
        this.saldo = this.saldo + valorDeposito;       
    }

    sacar(){
        const valorSacar = readline.question("Digite o valor que deseja sacar:");
        this.saldo = this.saldo - valorSacar;  
    }

    consultarSaldo(){
        console.log(`O saldo da conta é ${this.saldo}`);
    }
}