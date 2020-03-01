// forEach - executa uma dada função em cada elemento de um array.

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let total = 0;

array.forEach(valor => {
    total += valor;
});

console.log(total);