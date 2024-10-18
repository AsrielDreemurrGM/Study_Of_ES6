function divisoria(texto) {
    console.log("---------------------------------------------------------");
    console.log(texto);
    console.log("---------------------------------------------------------");
}

// Rest
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

// Spread
// Com o Spread conseguimos "espalha" os itens de um Array;
// Para utilizar o Spread usamos os "..." da mesma maneira que no Rest;
// O que diferencia o Spread do Rest é o seu caso de uso, o Rest é utilizado como
// argumento de função, e o Spread podemos utilizar para fazer concatenações, console.log 
// e preeenchimento de objetos;
divisoria('Mostrando os Valores de um Array com o Spread');
const numeros = [1, 2, 3, 4]
console.log(...numeros);

divisoria("Unindo Arrays com o Concat")
const cidadesDeSantaCatarina = ['Chapecó', 'Pinhalzinho','Cunha Porã', 'Maravilha'];
const cidadesDoRioGrandeDoSul = ['Rio Grande', 'Pelotas', 'Passo Fundo', 'Alvorada'];

// Podemos uni-los utilizando a função ".concat()";
const cidadesConcat = [cidadesDeSantaCatarina.concat(cidadesDoRioGrandeDoSul)];
console.log(cidadesConcat)
// Outra maneira é através do Spread
divisoria("Unindo Arrays com o Spread")
// Criamos um novo Array (cidadesSpread) e "espalhamos" o conteúdo dos outros arrays nele;
const cidadesSpread = [...cidadesDeSantaCatarina, ...cidadesDoRioGrandeDoSul];
console.log(cidadesSpread)

divisoria("Utilizando o Spread em Objetos - Carro da Julia");
// Podemos também utilizar o Spread em Objetos, espalhando assim suas propriedades;
const carroDaJulia = {
    modelo: 'gol',
    marca: 'vw',
    motor: 1.6
}
console.log(carroDaJulia);

const carroDaAna = {
    // Para não repetir o código podemos utilizar o Spread
    // Pegamos as informações do Objeto chamando-o com os "...";
    // Neste exemplo a única diferença é que o carro da Ana tem um motor 1.8,
    // então só passamos o valor alterado;
    // Se os carros fossem identicos, poderiamos simplesmente não fornecer nenhum valor;
    ...carroDaJulia,
    motor: 1.8
}
divisoria("Utilizando o Spread em Objetos - Carro da Ana");
console.log(carroDaAna);

divisoria("Recurso do ES6+ - Desestruturação - Motores dos Carros");
// Se quiséssemos acessar somente a propriedade motor do carro da Ana,
// poderiamos fazer da seguinte maneira: const motorDoCarroDaAna = carroDaAna.motor;
// Com a Desestruturação de Objetos podemos fazer isto diretamente na 
// atribuição de uma variável, da seguinte maneira:
// const { propriedadeDesejada } = ObjetoQueContemAPropriedade;
// Com a Desetruturação podemos aplicar o "Alias", ou apelido, as variáveis,
// isto é útil pois não podemos ter várias variáveis com o mesmo nome;
// Fazemos isto com os dois pontos ":" após a propriedade;
const { motor: motorCarroAna } = carroDaAna;
const { motor: motorCarroJulia } = carroDaJulia;

console.log(motorCarroJulia);
console.log(motorCarroAna);

divisoria("Desestruturação de Arrays - Primeiras Cidades do Array");
// Reaproveitado os Arrays de cidades;
// Para fazer a Desestruturação de Arrays também criamos uma constante,
// porém passamos Colchetes "[]" ao invés de Chaves "{}";
const [item1, item2, item3, ...outrasCidades] = cidadesSpread;

// Chamamos os três primeiros items - Retorno: string;
console.log(item1);
console.log(item2);
console.log(item3);
divisoria("Desestruturação de Arrays - Todas as Outras Cidades");
// Chamamos todos os items que sobraram com o Rest - Retorno: Array de Strings;
console.log(outrasCidades);