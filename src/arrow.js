function divisoria(texto) {
    console.log("---------------------------------------------------------");
    console.log(texto);
    console.log("---------------------------------------------------------");
}
// Arrow Function
divisoria("Retornando uma String - Arrow Function");
// Retornando uma String
const minhaFuncao = () => "Diz Olá";

console.log(minhaFuncao());

divisoria("Retornando um Objeto - Arrow Function");
// Retornando um Objeto
const retornaUmCarro = () => ({
    modelo: 'Ka',
    Fabricante: 'Ford'
})

console.log(retornaUmCarro());

// Podemos reproveitar um código do Arquivo de Arrays como Exemplo:
// function filtroAlunosBackend(aluno) {
//     return aluno.curso === 'Backend';
// }
// Podemos omitir os parenteses "()" quando temos somente um argumento;
// Se temos mais de um ou nenhum argumento os parenteses "()" são obrigatórios;
// Fica assim em uma Arrow Function
// const filtroAlunosBackend2 = aluno => aluno.curso === 'Backend';

divisoria('Retornando o Objeto "carro" - Arrow Function');
// As Arrow Functions possuem um escopo de função diferente das funções tradicionais;
// Objeto
const carro = {
    velocidadeAtual: 40,
    //Método utilizando uma função de forma convencional
    acelerar: function() {
        console.log(this);
        this.velocidadeAtual += 10;
    },
    //Método utilizando uma função Arrow
    frear: () => {
        // o "this" de uma função Arrow retorna "undefined". Neste exemplo o retorno é um erro do node por este motivo;
        // Porém isto depende de quem esta chamando ela, se fosse em um navegador teriamos um retorno correto;
        // Então o recomendado é:
        // Sempre que for trabalhar com Orientação a Objetos e acessar o "this" devemos optar pela forma convencional de escrever funções.
        // Mas quando precisamos fazer algo mais sucinto, como um retorno ou uma função que trate algum valor,
        // podemos utilizar Arrow Functions sem problemas;
        console.log(this);
        this.velocidadeAtual -= 10;
    }
}

carro.acelerar();
carro.frear();

console.log(carro.velocidadeAtual);