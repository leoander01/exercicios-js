// defineProperty - defineProperties - define uma nova propriedade diretamente em um objeto, ou modifica uma propriedade já existente em um objeto, e retorna o objeto.
function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;

    let estoquePrivado = estoque;
    Object.defineProperty(this, 'estoque', {
        enumerable: true, // mostra a chave
        configurable: true, // configurável
        get: function() {
            return estoquePrivado;
        },
        set: function(valor) {
            if (typeof valor !== 'number') {
                throw new TypeError('Mensagem')
            }
            estoquePrivado = valor;
        }
    });
}

const produto1 = new Produto('Camiseta', 20, 3);
produto1.estoque = 'cxv';
console.log(produto1.estoque);



// Object.defineProperties(this, {
//     nome: {
//         enumerable: true, // mostra a chave
//         value: nome, // valor
//         writable: true, // pode alterar
//         configurable: true // configurável
//     },
//     preco: {
//         enumerable: true, // mostra a chave
//         value: preco, // valor
//         writable: true, // pode alterar
//         configurable: true // configurável
//     },
// });