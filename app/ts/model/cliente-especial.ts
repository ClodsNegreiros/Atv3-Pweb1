class ClienteEspecial extends Cliente {
    private dependentes: Clientes;

    constructor(nome: string, cpf: string, ) {
        super(nome, cpf);
        this.dependentes = new Clientes();
    }

    get _dependentes(){
        return this.dependentes;
    }

    set _dependentes(dependente:Clientes){
        this.dependentes = dependente;
    }
}