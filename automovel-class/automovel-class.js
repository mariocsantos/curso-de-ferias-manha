var Automovel = (function () {
    function Automovel(nome, placa, cor, ano) {
        if (nome === void 0) { nome = 'Gol'; }
        this.nome = nome;
        this.placa = placa;
        this.cor = cor;
        this.ano = ano;
        console.log(this.nome);
    }
    Automovel.prototype.getCor = function () {
        return 'Cor do carro: ' + this.cor;
    };
    return Automovel;
}());
var fusca = new Automovel('Fusca', 'MAO-1548', 'Azul', 1898);
var cor = fusca.getCor();
console.log(cor);
