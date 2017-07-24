import { Cor } from './automovel-cor';
import { Automovel } from './automovel-interface';

class Carro implements Automovel {
    nome:   string;
    placa:  string;
    ano:    number;
    cor:    Cor
    
    constructor(
        nome:   string,
        placa:  string,
        ano:    number,
        cor:    Cor,
        private arCondicionado: boolean) {

        this.nome = nome;
        this.placa = placa;
        this.ano = ano;
        this.cor = cor;
    
    }

    getCor() {
        return 'Cor do carro: ' + Cor[this.cor];
    }

    setArCondicionado(isTrue) {
        this.arCondicionado = isTrue
    }

    getArCondicionado() {
         return this.arCondicionado;
    }
}

class Moto implements Automovel {
    nome:   string;
    placa:  string;
    ano:    number;
    cor:    Cor
    
    constructor(
        nome:   string,
        placa:  string,
        ano:    number,
        cor:    Cor,
        public mata: boolean) {

        this.nome = nome;
        this.placa = placa;
        this.ano = ano;
        this.cor = cor;
    
    }

    getCor() {
        return 'Cor da moto: ' + Cor[this.cor];
    }
}

var fusca = new Carro('Fusca', 'MAO-1548', Cor.Azul, 1898, true);
fusca.setArCondicionado(false);
console.log(fusca.getArCondicionado());
fusca.setArCondicionado(false);
console.log(fusca.getArCondicionado());