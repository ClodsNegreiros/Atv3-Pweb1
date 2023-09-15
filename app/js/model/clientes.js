class Clientes {
    constructor() {
        this.clientes = new Array();
    }
    inserir(cliente) {
        this.clientes.push(cliente);
    }
    remover(cpf) {
        const clienteARemover = this.pesquisar(cpf);
        if (clienteARemover) {
            const idxARemover = this.clientes.indexOf(clienteARemover);
            if (idxARemover > -1) {
                this.clientes.splice(idxARemover, 1);
            }
        }
        return clienteARemover;
    }
    listar() {
        return this.clientes;
    }
    pesquisar(cpf) {
        return this.clientes.find((cliente) => {
            return cliente._cpf === cpf;
        });
    }
}
