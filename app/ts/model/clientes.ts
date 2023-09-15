class Clientes {

    private clientes: Array<Cliente>;

    constructor() {
        this.clientes = new Array<Cliente>();
    }

    inserir(cliente: Cliente) {
        this.clientes.push(cliente);
    }

    remover(cpf: string): Cliente {
        const clienteARemover: Cliente = this.pesquisar(cpf);

        if (clienteARemover) {
            const idxARemover = this.clientes.indexOf(clienteARemover);
            
            if (idxARemover > -1) {
                this.clientes.splice(idxARemover, 1);
            }
        }

        return clienteARemover;
    }

    listar(): Array<Cliente> {
        return this.clientes;
    }

    pesquisar(cpf: string): Cliente {
        return this.clientes.find((cliente) => {
            return cliente._cpf === cpf;
        })
    }
}