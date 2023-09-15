class Cliente {
    constructor(nome, cpf) {
        this.nome = nome;
        this.cpf = cpf;
    }
    get _nome() {
        return this.nome;
    }
    set _nome(novoNome) {
        this.nome = novoNome;
    }
    get _cpf() {
        return this.cpf;
    }
    set _cpf(novoCpf) {
        this.cpf = novoCpf;
    }
    get _conta() {
        return this.conta;
    }
    set _conta(novaConta) {
        this.conta = novaConta;
    }
    toString() {
        return `Nome: ${this.nome} - Cpf: ${this.cpf}`;
    }
}
