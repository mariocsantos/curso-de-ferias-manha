export class Pessoa {
    
    constructor(protected nome: string, public cpf: number) {
    }

}

export class Herdeiro extends Pessoa {
    constructor(nome: string, cpf: number, public taVivo: boolean) {
        super(nome, cpf);
    }
}

var silvio = new Herdeiro('Patricia Santos', 9999999999, true);
console.log(silvio);