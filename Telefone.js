export default class Telefone {
    constructor(ddd, numero) {
        this.ddd = ddd; 
        this.numero = numero; 
    }

    getDddAsString() {
        return String(this.ddd);
    }

    getNumeroAsString() {
        return String(this.numero);
    }
}