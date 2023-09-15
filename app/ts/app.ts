let clienteController = new ClienteController();
let contaController = new ContaController();

const c1 = new Conta('1', 100);
const p1 = new Poupanca('2', 100);
const cb1 = new ContaBonificada('3', 0);

// Criando 3 novos clientes
const cliente1 = new Cliente('Clodoaldo', '123');
const cliente2 = new Cliente('Caio', '456');
const cliente3 = new Cliente('Gustavo', '789');

// Criando a classe para armazenar clientes
const clientes = new Clientes();

// Setando conta do cliente 1
cliente1._conta = c1;

// Inserindo os 3 clientes na lista de clientes
clientes.inserir(cliente1);
clientes.inserir(cliente2);
clientes.inserir(cliente3);

// Armazenando a lista de clientes e mostrando-os
const listaDeClientes = clientes.listar();
console.log(listaDeClientes);

// Removendo cliente e apresentando a lista atualizada
console.log(clientes.remover('456'));
console.log(listaDeClientes);

// Pesquisando cliente
console.log(clientes.pesquisar('123'));