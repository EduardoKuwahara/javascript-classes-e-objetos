import Telefone from './Telefone.js';
import Endereco from './Endereco.js';
import Cliente from './Cliente.js';
import Empresa from './Empresa.js';

const enderecoEmpresa = new Endereco("SP", "São Paulo", "Av. Paulista", "1000");
const empresa = new Empresa("ABC LTDA", "Mercado Online", "12.345.678/0001-99", enderecoEmpresa);
empresa.adicionarTelefone(new Telefone("11", "3333-4444"));
empresa.adicionarTelefone(new Telefone("11", "3333-5555"));

const clienteJoao = new Cliente("João", "111.222.333-44", new Endereco("SP", "São José dos Campos", "Av Andrômeda", "987"));
clienteJoao.adicionarTelefone(new Telefone("12", "99999-9999"));
clienteJoao.adicionarTelefone(new Telefone("12", "99999-0000"));

const clienteGabriel = new Cliente("Gabriel", "222.333.444-55", new Endereco("SP", "São José dos Campos", "Av Andrômeda", "412"));
clienteGabriel.adicionarTelefone(new Telefone("12", "88888-8888"));
clienteGabriel.adicionarTelefone(new Telefone("12", "88888-0000"));

const clienteBarbara = new Cliente("Barbara", "333.444.555-66", new Endereco("SP", "São José dos Campos", "Av São João", "789"));
clienteBarbara.adicionarTelefone(new Telefone("12", "77777-7777"));
clienteBarbara.adicionarTelefone(new Telefone("12", "77777-0000"));

const clienteMarcia = new Cliente("Márcia", "444.555.666-77", new Endereco("SP", "São José dos Campos", "Av Andrômeda", "452"));
clienteMarcia.adicionarTelefone(new Telefone("12", "66666-6666"));
clienteMarcia.adicionarTelefone(new Telefone("12", "66666-0000"));

const clienteLucas = new Cliente("Lucas", "555.666.777-88", new Endereco("SP", "Jacareí", "Rua do Vale", "123"));
clienteLucas.adicionarTelefone(new Telefone("12", "55555-5555"));
clienteLucas.adicionarTelefone(new Telefone("12", "55555-0000"));

empresa.adicionarCliente(clienteJoao);
empresa.adicionarCliente(clienteGabriel);
empresa.adicionarCliente(clienteBarbara);
empresa.adicionarCliente(clienteMarcia);
empresa.adicionarCliente(clienteLucas);

console.log(empresa.detalhe());