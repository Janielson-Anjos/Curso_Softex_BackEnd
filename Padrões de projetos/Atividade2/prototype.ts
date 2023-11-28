abstract class Veiculo {
    constructor(
        protected modelo: string,
        protected marca: string,
        protected cor: string,
        protected numeroRodas: number
    ) {}

    abstract clone(): Veiculo;
    abstract represent(): string;
}


class Carro extends Veiculo {
    constructor(
        modelo: string,
        marca: string,
        cor: string,
        numeroRodas: number,
        private numeroPortas: number
        ) {
        super(modelo, marca, cor, numeroRodas);
        }

        clone(): Veiculo {
            return new Carro(this.modelo, this.marca, this.cor, this.numeroRodas, this.numeroPortas);
        }

        represent(): string {
            return `Carro ${this.modelo} - Marca ${this.marca} - Cor ${this.cor} - Rodas ${this.numeroRodas} - Portas: ${this.numeroPortas}`;
        }
}

class Moto extends Veiculo{
    constructor(
        modelo: string,
        marca: string,
        cor: string,
        numeroRodas: number,
        private cilindradas: number
    ){
        super(modelo, marca, cor, numeroRodas);
    }

    clone(): Veiculo {
        return new Moto(this.modelo, this.marca, this.cor, this.numeroRodas, this.cilindradas);
    }

    represent(): string {
        return `Moto ${this.modelo} - Marca ${this.marca} - Cor ${this.cor} - Rodas ${this.numeroRodas} - Cilindradas: ${this.cilindradas}`;
    }
}

class Aplicacao {
    criarVeiculos(): Veiculo[] {
            const car = new Carro("Fusca", "Volkswagen", "Azul", 4, 4);
            const moto = new Moto("Biz", "Honda", "Vermelha", 2, 115);
        
            return [car, moto, car.clone(), moto.clone(), car.clone(), moto.clone()];
    
    }

    clonarVeiculos(veiculos: Veiculo[]): Veiculo[]{
        return veiculos.map(veiculo => veiculo.clone());
    }

    imprimirRepresentacao(veiculos: Veiculo[]): void {
        veiculos.forEach(veiculo => console.log(veiculo.represent()));
    }
}


const app = new Aplicacao();


const veiculos = app.criarVeiculos();
const clonesVeiculos = app.clonarVeiculos(veiculos);

console.log('Veículos Originais:');
app.imprimirRepresentacao(veiculos);

console.log('Veículos Clonados:');
app.imprimirRepresentacao(clonesVeiculos);
