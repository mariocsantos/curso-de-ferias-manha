import { Cor } from './automovel-cor'; 

export interface Automovel {
    nome:   string;
    placa:  string;
    ano:    number;
    cor:    Cor,

    getCor()
}