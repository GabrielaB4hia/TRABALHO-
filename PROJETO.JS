class Funcionario {
    _ID = 0
    constructor (nome) {
        this.nome = nome
    }
// O constructor serve para criar e inicializar um objeto criado a partir de uma classe.
    setarID(novoID){
        if (typeof novoID == "string") {
            this._ID = novoID
        }
    }

    get  _ID (){
        return this._ID
    }
// O get (pegar) serve para obter e retornar o valor “setado”.
    set _ID (x) {
        if (typeof x == "string") {
            this.ID
        }
    }
   // O set (atribuir) receber os dados dos atributos e injetá-los.
}

let p1 = new Funcionario ("Leo");
let p2 = new Funcionario ("Laisa");
let p3 = new Funcionario ("Isaias");
let p4 = new Funcionario ("Ligia");

p1._ID = 1234
p2._ID = 1098
p3._ID = 5431
p4._ID = 2454

class Cliente extends fucionario {
    constructor (Cliente) {
    Super(nome)
    this.Cliente = Cliente

}
p1.Cliente =("Maria");
p2.Cliente = ("Neymar");


class Pedido  {
    constructor (Pedido) {
    this.Pedido = Pedido }

}

p1.Pedido = ("Pizza de Calabresa")
p2.Pedido = ("Pizza de Atum")

//console.log() Imprime o texto no console como uma mensagem log.

console.log (`${p1.nome} de ID ${p1._ID} Atribuiu o atendimento o(a) ${p1.Cliente} que pediu ${p1.Pedido}`)
console.log (`${p2.nome} de ID ${p2._ID} Atribuiu o atendimento o(a) ${p2.Cliente} que pediu ${p2.Pedido}`)


class Entrega {
    constructor(Entrega){
        this.Entrega = Entrega
    }
}

p1.Entrega = ("na Rua dos Anjos")
p2.Entrega = ("na Rua Clayton Cecon")

console.log (`Funcionario ${p1.nome} de id ${p1._ID} enviou o pedido da cliente ${p1.Cliente}  que mora ${p1.Entrega}`)
console.log (`Funcionaria ${p2.nome} de id ${p1._ID} enviou o pedido do cliente ${p2.Cliente} que mora ${p2.Entrega}`)


class Pagamento  {
    constructor (TipoPagamento) {
        this.TipoPagamento = TipoPagamento
    }
}

p1.TipoPagamento = ("Cartão de Débito")
p2.TipoPagamento = ("Cartão de Crédito")
p3.TipoPagamento = ("Pix")
p4.TipoPagamento = ("Dinheiro")


console.log (`Cliente ${p1.Cliente} efetuou o pagamento via ${p1.TipoPagamento}`)
console.log (`Cliente ${p2.Cliente} efetuou o pagamento via ${p3.TipoPagamento}`)p2.Cliente} efetuou o pagamento via ${p3.TipoPagamento}`)
