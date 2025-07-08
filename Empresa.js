export default class Empresa {
    #cnpj; 

    constructor(razaoSocial, nomeFantasia, cnpj, endereco) { 
        this.razaoSocial = razaoSocial; 
        this.nomeFantasia = nomeFantasia; 
        this.#cnpj = cnpj; 
        this.endereco = endereco; 
        this.telefones = new Set(); 
        this.clientes = new Set(); 
    }

    get cnpj() {
        return this.#cnpj;
    }

    adicionarTelefone(telefone) {
        this.telefones.add(telefone);
    }

    adicionarCliente(cliente) {
        this.clientes.add(cliente);
    }
    
    getRazaoSocialCaixaAlta() {
        return this.razaoSocial.toUpperCase();
    }

    getNomeFantasiaCaixaAlta() {
        return this.nomeFantasia.toUpperCase();
    }

    detalhe() {
        let descricao = `Razão Social: ${this.razaoSocial.toUpperCase()}\n`; 
        descricao += `Nome Fantasia: ${this.nomeFantasia}\n`; 
        
        descricao += `\n--- TELEFONES DA EMPRESA ---\n`;
        for (const tel of this.telefones) {
            descricao += `ddd: ${tel.ddd} numero: ${tel.numero}\n`;
        }

        descricao += `\n--- CLIENTES ---\n`;
        for (const cliente of this.clientes) {
            descricao += `\nNome: ${cliente.nome}\n`; 
            descricao += `Estado: ${cliente.endereco.estado} cidade: ${cliente.endereco.cidade} rua: ${cliente.endereco.rua} numero: ${cliente.endereco.numero}\n`; 
            for (const tel of cliente.telefones) {
                descricao += `ddd: ${tel.ddd} numero: ${tel.numero}\n`; 
            }
        }

        return descricao;
    }
}