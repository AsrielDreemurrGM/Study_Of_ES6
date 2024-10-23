function divisoria(texto) {
    console.log("---------------------------------------------------------");
    console.log(texto);
    console.log("---------------------------------------------------------");
}
// Map;
// É uma estrutura que pode ser chamada de um dicionário, é um conjunto de 
// valores e esses valores são como objetos, então sempre teremos uma chave e um valor;
divisoria("Criando Um Map");
let meuMap = new Map();
// Para adicionar um item ao Map:
// Lê-se: meuMap.set("Chave", "Valor");
meuMap.set("nome", "Eduardo");

console.log(meuMap);

divisoria("Recuperando Um Valor do Map");
// Para recuperar um item do map:
// Lê-se: meuMap.get("Chave");
const nome = meuMap.get("nome");

console.log(nome);

divisoria("Vendo Tamanho do Map");
console.log(meuMap.size)

divisoria("Verificando se o Map Tem a Chave Informada");
// Lê-se: meuMap.has("Chave");
// Retorna True ou False;
console.log(meuMap.has("nome"));
console.log(meuMap.has("sobrenome"));

divisoria("Vendo Tamanho do Map Após Limpá-lo");
// Remover itens do Map;
meuMap.clear();

console.log(meuMap.size);

divisoria("Preenchendo o Map Novamente")
meuMap.set("nome", "Eduardo");
meuMap.set("stack", "HTML, CSS, JS");

console.log(meuMap);
divisoria("Recuperando as Chaves do Map - For Of");
// Para iterar um Map utilozamos o "for of";
// Utilizamos uma função, para recuperar as chaves do mapa ou os valores;
// Para chaves, utilizamos ".keys", para valores, ".values", para as entradas, ".entries";
for (let chave of meuMap.keys()) {
    console.log(chave);
}

divisoria("Recuperando os Valores do Map - For Of");
for (let valores of meuMap.values()) {
    console.log(valores);
}

// Entradas são o valor inteiro contido no Map, ou seja, a Chave e o Valor juntos;
divisoria("Recuperando as Entradas do Map");
for (let entradas of meuMap.entries()) {
    console.log(entradas);
}

// 
divisoria("Desestruturando o Map");
for (let [chave, valor] of meuMap.entries()) {
    console.log(`${chave}: ${valor}`);
}

divisoria("Removendo Item do Map");
meuMap.delete("stack");

console.log(meuMap);

divisoria("Criando um Set");
// Set
// O Set é uma estrutura mais rígida, não temos o conjunto de Chave e Valor;
// Além disso, valores não podem se repetir dentro de um Set;
// Vamos fazer uma lista de CPFs;
const cpfs = new Set();

// Adicionando item ao Set;
cpfs.add('42960293045');
cpfs.add('49861664092');
cpfs.add('66906050001');

// Recebemos todos os valores, sem separação;
console.log(cpfs);

divisoria('Listando o Set com ".keys"');
// Utilizando ".keys" e ".values" obtemos exatamente o mesmo retorno;
console.log(cpfs.keys());
divisoria('Listando o Set com ".values"');
console.log(cpfs.values());

divisoria('Listando o Set com ".forEach"');
// ForEach - Pode ser usado tanto com Sets quanto com Maps
cpfs.forEach((valor) => {
    console.log(valor);
})

divisoria('Listando Array com Valores Repetidos');
const array = ['Eduardo Augusto', 'José Paulo', 'Maria Isabel', 'Robson', 'Joana', 'Joana', 'Robson'];

console.log(array);

divisoria('Transformando o Array em Set - Remove Valores Repetidos');
// Fazemos isso transformando o Array em um Set, já que o Set não permite valores repetidos;
const arrayComoSet = new Set([...array]);

console.log(arrayComoSet);

divisoria('Transformando o Set em Array');
const arraySemItensDuplicados = [...arrayComoSet];

console.log(arraySemItensDuplicados);