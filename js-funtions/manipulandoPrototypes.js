function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.desconto = function(percentual) {
    this.preco = this.preco - (this.preco * (percentual / 100));
}

Produto.prototype.aumento = function(percentual) {
    this.preco = this.preco + (this.preco * (percentual / 100));
}

const produto1 = new Produto('Camiseta', 50);

// Literal
const produto2 = {nome: 'Caneca', preco: 15}
Object.setPrototypeOf(produto2, Produto.prototype);



// produto1.desconto(100);
produto2.aumento(10);

const produto3 = Object.create(Object.prototype);

console.log(produto1);
console.log(produto2);
console.log(produto3);