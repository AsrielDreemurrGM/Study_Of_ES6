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