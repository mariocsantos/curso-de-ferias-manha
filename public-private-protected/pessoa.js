"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var Pessoa = (function () {
    function Pessoa(nome, cpf) {
        this.nome = nome;
        this.cpf = cpf;
    }
    return Pessoa;
}());
exports.Pessoa = Pessoa;
var Herdeiro = (function (_super) {
    __extends(Herdeiro, _super);
    function Herdeiro(nome, cpf, taVivo) {
        var _this = _super.call(this, nome, cpf) || this;
        _this.taVivo = taVivo;
        return _this;
    }
    return Herdeiro;
}(Pessoa));
exports.Herdeiro = Herdeiro;
var silvio = new Herdeiro('Patricia Santos', 9999999999, true);
console.log(silvio);
