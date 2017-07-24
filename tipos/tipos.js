var nome = 'SMN';
var isTrue = true;
var lista = ['a', 'b'];
var numero = 100;
numero = 'Silvio Santos';
function hello() {
    console.log('Hello');
    return;
}
hello();
var EstadoCivil;
(function (EstadoCivil) {
    EstadoCivil[EstadoCivil["Solteiro"] = 0] = "Solteiro";
    EstadoCivil[EstadoCivil["Casado"] = 1] = "Casado";
    EstadoCivil[EstadoCivil["Divorciado"] = 2] = "Divorciado";
})(EstadoCivil || (EstadoCivil = {}));
;
var estadoDoSilvioSantos = EstadoCivil.Casado;
console.log(EstadoCivil[1]);
