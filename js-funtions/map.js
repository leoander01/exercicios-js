// map -invoca a função callback passada por argumento para cada elemento do Array e devolve um novo Array como resultado.

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const dobro = numeros.map(valor => valor * 2);

console.log(dobro);

const pessoas = [
    { nome: 'Luiz', idade: 62 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduardo', idade: 55 },
    { nome: 'Letícia', idade: 19 },
    { nome: 'Rosana', idade: 32 },
    { nome: 'Wallace', idade: 47 }
];

const nomes = pessoas.map(obj => obj.nome);

const idades = pessoas.map(obj => ({ idade: obj.idade }) );

const comID = pessoas.map(function(obj, indice) {
    const newPessoas = { ...obj };
    newPessoas.id = (indice + 1);
    return newPessoas;
});

console.log(comID)