interface Computer {

    ram: number;
    hdd: number;
    cpu: number;
    type: string;

    toString(): string;
}

interface ComputerFactory {
    createComputer(ram: number, hdd: number, cpu: number): Computer;
}


class PCFactory implements ComputerFactory {
    createComputer(ram: number, hdd: number, cpu: number): Computer {
        return new PC(ram, hdd, cpu);
    }
}


class ServerFactory implements ComputerFactory {
    createComputer(ram: number, hdd: number, cpu: number): Computer {
        return new Server(ram, hdd, cpu);
    }
}

class PC implements Computer {
    constructor(public ram: number, public hdd: number, public cpu: number){
        this.type = "PC";
    }
    toString(): string {
        return `Type: ${this.type}, RAM: ${this.ram}GB, HDD: ${this.hdd}GB, CPU: ${this.cpu}GHz`;
    }
}

class Server implements Computer {
    constructor(public ram: number, public hdd: number, public cpu: number){
        this.type = "Server";
    }

    toString(): string {
        return `Type: ${this.type}, RAM: ${this.ram}GB, HDD: ${this.hdd}GB, CPU: ${this.cpu}GHz`;
    }
}

const pcFactory = new PCFactory();

const serverFactory = new ServerFactory();

const meuPc = pcFactory.createComputer(16, 100, 4);

const meuServer: Computer = serverFactory.createComputer(16, 256, 2.8);

console.log(meuPc.toString());

console.log(meuServer.toString());


