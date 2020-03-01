// filter - cria um novo array com todos os elementos que passaram no teste implementado pela função fornecida.

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

// const numerosFiltrados = numeros.filter((valor, indice, array) => {
//     console.log(valor, indice, array);
//     return valor > 10;
// });

const numerosFiltrados = numeros.filter(valor => valor > 10);

console.log(numerosFiltrados)

const pessoas = [
    { nome: 'Luiz', idade: 62 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduardo', idade: 55 },
    { nome: 'Letícia', idade: 19 },
    { nome: 'Rosana', idade: 32 },
    { nome: 'Wallace', idade: 47 }
];

const pessoasComNomeGrande = pessoas.filter(obj => obj.nome.length > 5);

const cinquentaAnos = pessoas.filter(obj => obj.idade > 50);

const nomeTerminaComA = pessoas.filter(obj => obj.nome.toLowerCase().endsWith('a'));

console.log(nomeTerminaComA)
