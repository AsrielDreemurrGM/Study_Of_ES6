function divisoria(texto) {
    console.log("------------------------------------------------------------------");
    console.log(texto);
    console.log("------------------------------------------------------------------");
}

// O JavaScript é uma linguagem Single Thread, ele consegue fazer
// o processamento em apenas um processador;
// Dentro de um processador, existem os processadores lógicos (Dual Core, Quad Core, etc...);
// O JavaScript opera em somente um deles, mesmo que seu computador tenha mais de um;
// Com o ES6+ isto foi tornado possível, com a introdução das Promises e, 
// pouco tempo depois, os recursos Async e Await;

divisoria('Função Para Demonstrar o Sincronismo');
function funcaoMuitoPesada() {
    let execucoes = 0;

    for (let i = 0; i < 1000000000; i++) {
        execucoes++;
    }
    return execucoes;
}

console.log("Início da Função");
console.log(funcaoMuitoPesada());
console.log("Fim da Função");

divisoria('Função Executada em Forma de Promise - Pré-Antepenúltimo Retorno');
// Promises são uma forma de executarmos tarefas Multi thread;
// Recomenda-se utilizar Constantes;
const funcaoMuitoPesadaPromise = new Promise((resolve, reject) => {
    try {
        let execucoes = 0;

        for (let i = 0; i < 1000000000; i++) {
            execucoes++;
        }
        resolve(execucoes);
    } catch(e) {
        reject('Ocorreu um erro na contagem dos números');
    }
})

// Isto irá executar de forma Assíncrona, quebrando o display de Ínicio e Fim,
// já que a Promise demora mais para executar do que a função Divisória, fazendo
// com que o resultado apareça depois das divisórias;
console.log("Início da Promise");
funcaoMuitoPesadaPromise.then(resultado => console.log(resultado)).catch(erro => console.log(erro));
console.log("Fim da Promise");

divisoria('Executando Promise Com Erro - Último Retorno');
// Novamente, porém agora causamos um erro;
const PromiseComErro = new Promise((resolve, reject) => {
    try {
        let execucoes = 0;

        for (let i = 0; i < 1000000000; i++) {
            execucoes++;
        }
        resolve(execucoesS); // Erro aqui
    } catch(e) {
        reject('Ocorreu um erro na contagem dos números');
    }
})

console.log("Início da Promise");
PromiseComErro.then(resultado => console.log(resultado)).catch(erro => console.log(erro));
console.log("Fim da Promise");

divisoria('Fazendo o JS Esperar com o "Await"  - Antepenúltimo Retorno');
// Como tornar uma função Assíncrona em uma função Síncrona novamente;
// Usamos o "async" para informar o JS que a função é Assíncrona, e o
// "await" para informar o JS que ele deve esperar a função terminar antes de continuar;
async function execucaoPrincipal() {
    console.log("Início da Promise");

    try {
        // Desta maneira o "resolve" é atribuido a variável "resultado";
        const resultado = await funcaoMuitoPesadaPromise;
        console.log(resultado);

    } catch(e) {
        console.log(e);
    }

    console.log("Fim da Promise");
}

// Função principal que faz todo o código anterior ser executado primeiro, 
// por razões de estética e para melhor entendimento no Terminal;
async function executarTudo() {
    await execucaoPrincipal();
    
    divisoria("Promise Com Parâmetros");
    // Adicionando parâmetros a uma Promise
    const promiseComParametros = (login, senha) => {
        return new Promise((resolve, reject) => {
            // Simulando demora;
            setTimeout(() => {
                resolve(`Logado com o usuário: ${login}`);
            }, 3000)
        })
    }

    promiseComParametros('eduardo@gmail.com', 123456).then(resultado => {
        console.log(resultado);
    })
}

executarTudo();
