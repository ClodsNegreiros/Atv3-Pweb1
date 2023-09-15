class ClienteEspecial extends Cliente {
    constructor(nome, cpf) {
        super(nome, cpf);
        this.dependentes = new Clientes();
    }
    get _dependentes() {
        return this.dependentes;
    }
    set _dependentes(dependente) {
        this.dependentes = dependente;
    }
}
