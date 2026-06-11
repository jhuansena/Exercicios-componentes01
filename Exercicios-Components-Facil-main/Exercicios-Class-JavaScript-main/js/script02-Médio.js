let Carrinho = document.getElementById("exCarrinho")


class ContaBancaria2 {
    constructor(saldo, saque, deposito) {
        this.saldo = saldo
        this.saque = saque
        this.deposito = deposito
    }

    depositar(valor) {
        this.saldo += valor
    }

    sacar(valor) {
        if (valor > this.saldo) {
            console.log("Saldo Insuficiente!")
        } else {
            this.saldo -= valor
        }
    }

    verSaldo() {
        console.log(`Saldo na conta: ${this.saldo}`)
    }
}

const conta = new ContaBancaria2(3500)
conta.sacar(600)
conta.depositar(2000)
conta.verSaldo()

class AlunoMedia {
    constructor(nome) {
        this.nome = nome
    }
    media(nota1, nota2, nota3) {
        let soma = nota1 + nota2 + nota3
        soma = soma / 3
        console.log(`\nA média das notas de ${this.nome} é ${nota1}, ${nota2}, ${nota3}, é ${soma}`)
    }
}

const AlunoA = new AlunoMedia("Gio")
AlunoA.media(10, 8, 5)



class Agenda {
    constructor(nome, numero) {
        this.nome = nome
        this.numero = numero
    }
    mostrarContatos() {
        console.log(`\nLista de contatos ${this.nome} ${this.numero}`)
    }
}

const contato1 = new Agenda("Fábio", 1169156131)
const contato2 = new Agenda("Gio", 1169156131)
contato1.mostrarContatos()
contato2.mostrarContatos()


class CarrinhoCompras {
    constructor() {
        this.produtos = []
    }
    adicionarProdutos(produto) {
        this.produtos.push(produto)
    }

    calcularTotal() {
        let total = 0;
        for (let produto of this.produtos) {
            total += produto.preco;
        }
        return total;
    }

}
class ProdutosCarrinho {
    constructor(nome, preco) {
        this.nome = nome
        this.preco = preco
    }
}

const produto1 = new ProdutosCarrinho("Mouse", 89)
const produto2 = new ProdutosCarrinho("Teclado", 156)
const produto3 = new ProdutosCarrinho("Fonte", 299)

const Carrinho1 = new CarrinhoCompras()

Carrinho1.adicionarProdutos(produto1)
Carrinho1.adicionarProdutos(produto2)
Carrinho1.adicionarProdutos(produto3)

console.log(Carrinho1.produtos)
console.log("Total do carrinho: R$" + Carrinho1.calcularTotal());


class User {
    constructor(login, senha) {
        this.login = login
        this.senha = senha
    }


    validarLogin(loguinInformado, senhaInformada) {
        if (loguinInformado === this.login && senhaInformada === this.senha) {
            return true
        } else {
            return false
        }
    }
}

const User1 = new User("pgiovany", "Gigio212@")
const User2 = new User("sguilherme", "gui35@")

const acessoValido = User1.validarLogin("pgiovany", "Gigio212@")

if (acessoValido) {
    console.log("Loguin Efetuado com sucesso!")
} else {
    console.log("Senha ou Usuario invalidos!")
}

class Pedido {
    constructor() {
        this.produtospedido = []
    }
    adicionarProdutos(produto) {
        this.produtospedido.push(produto)
    }
    totalComDescontos() {
        let total = 0;
        for (let produto of this.produtospedido) {
            total += produto.preco;
        }
        return total;
    }
}
class ProdutosPedido {
    constructor(nome, preco) {
        this.nome = nome
        this.preco = preco
    }
}

const ProdutosParaCompra1 = new Pedido()
const ProdutoPedido1 = new ProdutosPedido("Pizza", 56)
const ProdutoPedido2 = new ProdutosPedido("Refrigerante", 10)
ProdutosParaCompra1.adicionarProdutos(ProdutoPedido1)
ProdutosParaCompra1.adicionarProdutos(ProdutoPedido1)
ProdutosParaCompra1.adicionarProdutos(ProdutoPedido2)
console.log(ProdutosParaCompra1.produtospedido, "Total dos produtos com desconto: $"+ProdutosParaCompra1.totalComDescontos())