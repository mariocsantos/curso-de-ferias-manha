class Automovel {

    constructor(
        public nome:  string = 'Gol', 
        public placa: string, 
        public cor:   string, 
        public ano:   number) {

        console.log(this.nome)
    }

    getCor(): string {
        return 'Cor do carro: ' + this.cor;
    }
}

var fusca = new Automovel('Fusca', 'MAO-1548', 'Azul', 1898);
var cor = fusca.getCor();
console.log(cor);