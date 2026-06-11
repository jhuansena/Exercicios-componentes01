class Pessoa{
    constructor(nome,idade){
        this.name = nome
        this.age = idade
    }
    apresentar(){
        console.log(`\nNome: ${this.name}\nIdade: ${this.age}`)
    }
}

const Pessoa1 = new Pessoa("Giovany", 24, 1910)

Pessoa1.apresentar()


class Carro{
    constructor(marca,modelo){
        this.marca = marca
        this.modelo = modelo
    }

    mostrar(){
        console.log(`\nMarca: ${this.marca}\nModelo: ${this.modelo}`)
    }
}
const Carro1 = new Carro("Ford","Mustang")
Carro1.mostrar()


class Aluno{
    constructor(nome,matricula){
        this.nome = nome
        this.matricula = matricula
    }
    estudar(){
        console.log(`\nNome: ${this.nome}\nMatricula: ${this.matricula}\nTem que estudar React`)
    }
}
const Aluno1 = new Aluno("Giovany", 1910)
Aluno1.estudar()

class Produto{
    constructor(nome, preco){
        this.nome = nome
        this.preco = preco
    }
    mostrarProduto(){
        console.log(`\n${this.nome}\nPreço: R$${this.preco}`)
    }
}
const Produto1 = new Produto("Samsung A17", 899.99)
const Produto2 = new Produto("Samnsung s10e", 1199.99)
Produto1.mostrarProduto()
Produto2.mostrarProduto()

class ContaBancaria{
    constructor(saldoInicial){
        this.saldoInicial = saldoInicial
    }
    verSaldo(){
        console.log(` 05:\nSaldo: R$${this.saldoInicial}`)
    }
    depositar(valor){
        console.log(`\nDeposito no valor de: ${valor}| Saldo atual: ${this.saldoInicial - valor} |`)
    }
}

const saldoInicial = new ContaBancaria(5235.79,"Giovany")
saldoInicial.verSaldo()
saldoInicial.depositar(199.45)

class Animal{
    constructor(nome){
        this.nome = nome
    }
    emitirSom(som){
        console.log(`\nO Animal ${this.nome} emite o som: ${som}`)
    }
}
const animal1 = new Animal("Gato")
animal1.emitirSom("Miau")

class Livro{
    constructor(titulo, autor){
        this.titulo = titulo
        this.autor = autor
    }
    detalhes(){
        console.log(`\nNome do livro: ${this.titulo}\nAutor: ${this.autor} `)
    }
}

const livro1 = new Livro("The last of us","Neil Drunman")
livro1.detalhes()

class Funcionario{
    constructor(nome,cargo){
        this.nome = nome
        this.cargo = cargo
    }
    trabalhar(){
        console.log(`\n${this.nome} trabalha como ${this.cargo}`)
    }
}
const Funcionario1 = new Funcionario("Giovany","Oficial Administrativo")
Funcionario1.trabalhar()