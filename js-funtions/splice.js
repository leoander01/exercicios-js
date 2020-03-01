const nomes = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Júlia'];

// nomes.splice(indíce, delete, elemento 1, elemento 2, elemento 3);

// pop - remove o último elemento de um array e retorna aquele elemento.
const removidos = nomes.splice(-1, 1 );

// shift - remove o primeiro elemento de um array e retorna esse elemento.
const removidos = nomes.splice(0, 1);

// push - adiciona um ou mais elementos ao final de um array 
nomes.splice(nomes.length, 0, 'Luiz');

// unshift - adiciona um ou mais elementos no início de um array
nomes.splice(0, 0, 'Luiz', 'Otávio');
