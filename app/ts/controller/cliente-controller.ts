class ClienteController {
    private nomeInput: HTMLInputElement;
    private cpfInput: HTMLInputElement;
    private clientes: Clientes;

    constructor() {
        this.nomeInput = <HTMLInputElement> document.querySelector('#nome');
        this.cpfInput = <HTMLInputElement> document.querySelector('#cpf');
        this.clientes = new Clientes();
    }

    inserir(evento: Event) {
        evento.preventDefault();
        
        const novoCliente = new Cliente(this.nomeInput.value, this.cpfInput.value);

        this.clientes.inserir(novoCliente);
        this.inserirClienteNoHtml(novoCliente);
    }

    listar() {
        this.clientes.listar().forEach(
            cliente => {
                this.inserirClienteNoHtml(cliente);
            }
        );
    }

    inserirClienteNoHtml(cliente: Cliente) {
        const elementoP = document.createElement('p');
        elementoP.textContent = cliente.toString();
        const botaoApagar = document.createElement('button');

        botaoApagar.textContent = 'X';
        botaoApagar.addEventListener('click',
            (event) => {
                this.clientes.remover(cliente._cpf);
                (<Element>event.target).parentElement.remove();
            }
            );
            
        elementoP.appendChild(botaoApagar);
        document.body.appendChild(elementoP);
    }
}