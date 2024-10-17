function divisoria(texto) {
    console.log("---------------------------------------------------------");
    console.log(texto);
    console.log("---------------------------------------------------------");
}

divisoria("Retornando Todos os Argumentos Fornecidos");
function somaExemplo() {
    // Se precisassemos fazer a soma de vários numeros, iriamos ter que criar um
    // argumento para cada número novo, o que funciona, mas não é o ideal;
    // No JS tradicional mesmo, dentro de funções temos a palavara reservada "arguments";
    // Ela retorna todos os argumentos que forem passados na função, com ela conseguimos
    // receber n números/infinitos argumentos;
    // Ele resembla um Array, porém ele não é um, e os métodos de Array, como "forEach"
    // e "reduce" não irão funcionar;
    // Porém ele é iterável;
    console.log(arguments)
}

console.log(somaExemplo(10, 20, 30));

// Exemplo na prática
divisoria('Somando Todos os Argumentos Com o "arguments" e o "for"');
function soma() {
    let soma = 0;

    for (let i = 0; i < arguments.length; i++) {
        soma += arguments[i];
    }

    return soma;
}

console.log(soma(10, 20, 30));

divisoria("Somando Tudo com o Rest")
// No ES6 foi introduzido o novo operador "rest"
// Para utilizar o Rest Precisamos adicionar antes do nome do argumento três pontos "...";
// Para chamar o argumento não precisamos usar os três pontos, somente na declaração da função;
// Ele transforma todos os valores forneciso em um Array;
// Pontos a considerar: 
// Não podemos ter dois argumentos utilizando o Rest somente um, exemplo do erro abaixo
// function somarComRest(...numeros, ...letras){};
// Ele deve ser o último argumento a ser declarado, exemplo do erro abaixo
// function somarComRest(...numeros, nome, sobrenome){};
function somarComRest(...numeros) {
    // Utilizado Arrow Function
    const soma = numeros.reduce((total, numeroAtual) => {
        total += numeroAtual;
        return total;
    }, 0)
    return soma;
}

console.log(somarComRest(10, 20, 30));