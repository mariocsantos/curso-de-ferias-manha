var nome: string = 'SMN';
var isTrue: boolean = true;
var lista: string[] = ['a', 'b'];
var numero: any = 100;
numero = 'Silvio Santos';

function hello(): string {
    console.log('Hello');
    return;
} 

hello();

enum EstadoCivil {Solteiro, Casado, Divorciado};

var estadoDoSilvioSantos: EstadoCivil = EstadoCivil.Casado;

console.log(EstadoCivil);