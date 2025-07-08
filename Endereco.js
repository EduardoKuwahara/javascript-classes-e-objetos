export default class Endereco {
    constructor(estado, cidade, rua, numero) { 
        this.estado = estado;
        this.cidade = cidade; 
        this.rua = rua; 
        this.numero = numero; 
    }

    getEstadoCaixaAlta() {
        return this.estado.toUpperCase();
    }

    getEstadoCaixaBaixa() {
        return this.estado.toLowerCase();
    }

    getCidadeCaixaAlta() {
        return this.cidade.toUpperCase();
    }

    getCidadeCaixaBaixa() {
        return this.cidade.toLowerCase();
    }

    getRuaCaixaAlta() {
        return this.rua.toUpperCase();
    }

    getRuaCaixaBaixa() {
        return this.rua.toLowerCase();
    }
}