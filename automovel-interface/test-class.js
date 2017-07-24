"use strict";
exports.__esModule = true;
var automovel_cor_1 = require("./automovel-cor");
var Carro = (function () {
    function Carro(nome, placa, ano, cor, arCondicionado) {
        this.arCondicionado = arCondicionado;
        this.nome = nome;
        this.placa = placa;
        this.ano = ano;
        this.cor = cor;
    }
    Carro.prototype.getCor = function () {
        return 'Cor do carro: ' + automovel_cor_1.Cor[this.cor];
    };
    Carro.prototype.setArCondicionado = function (isTrue) {
        this.arCondicionado = isTrue;
    };
    Carro.prototype.getArCondicionado = function () {
        return this.arCondicionado;
    };
    return Carro;
}());
var Moto = (function () {
    function Moto(nome, placa, ano, cor, mata) {
        this.mata = mata;
        this.nome = nome;
        this.placa = placa;
        this.ano = ano;
        this.cor = cor;
    }
    Moto.prototype.getCor = function () {
        return 'Cor da moto: ' + automovel_cor_1.Cor[this.cor];
    };
    return Moto;
}());
var fusca = new Carro('Fusca', 'MAO-1548', automovel_cor_1.Cor.Azul, 1898, true);
fusca.setArCondicionado(false);
console.log(fusca.getArCondicionado());
fusca.setArCondicionado(true);
console.log(fusca.getArCondicionado());
