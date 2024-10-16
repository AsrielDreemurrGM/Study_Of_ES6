function divisoria(texto) {
    console.log("---------------------------------------------------------");
    console.log(texto);
    console.log("---------------------------------------------------------");
}

const redesSociais = ['Facebook', 'Instagram', 'Twitter'];

// Chamando Array de maneira normal
// for (let i = 0; i < redesSociais.length; i++) {
//     console.log(`Eu tenho perfil na rede social: ${redesSociais[i]}`)
// }

divisoria("Chamando Array Utilizando o ES6+");
redesSociais.forEach(function(nomeDaRedeSocial, indice) {
    console.log(`#${indice} Eu tenho perfil na rede social: ${nomeDaRedeSocial}`)
})

divisoria("Array de Alunos");
// Método "map"
// Podemos iterar um Array e criar um novo array
// Exemplo 1:
const alunos = ['Gustavo', 'Julia', 'Eduardo', 'Wagner'];

alunos.forEach(function(nomeDoAluno) {
    console.log(`Olá! Meu nome é: ${nomeDoAluno}`)
})

divisoria("Criando Novo Array - Método Map");
const alunos2 = alunos.map(function(itemAtual) {
    // Objeto
    return {
        nome: itemAtual,
        curso: 'Frontend'
    }
    // Podemos fazer direto no "return";
    // return itemAtual;
})

console.log(alunos2);

divisoria("Buscando o Aluno no Array");
// Método para busca de item no Array
// Utiliza .find()
// Caso não encontre o retorno será "undefined"
const eduardo = alunos2.find(function(item) {
    return item.nome == 'Eduardo' // true or false
})

console.log(eduardo);

divisoria("Encontra o Indice do Nome no Array");
// Encontra o Indice do item no Array
// Utiliza .findIndex()
// Caso não encontre o retorno será "-1"
const indiceDoEduardo = alunos2.findIndex(function(item) {
    return item.nome == 'Eduardo' // true or false
})

console.log(indiceDoEduardo);

divisoria("Verificando se Todos os Alunos são do Mesmo Curso");
// Método para verificar os valores dentro de um Array
// Verificando se todos os alunos são do curso de Frontend
// Retorna true or false
// .every
// Adicionando um aluno de Backend para retornar false
alunos2.push({
    nome: 'Jonas',
    curso: 'Backend'
})

const todosAlunosSaoDeFrontend = alunos2.every(function(item) {
    return item.curso === 'Frontend'
})

console.log(todosAlunosSaoDeFrontend);

divisoria("Verificando se Pelo Menos um Aluno é de Backend");
// Verificando se pelo menos um dos items do Array contém o que pesquisamos
// .some
// Retorna true or false
const existeAlgumAlunoDeBackend = alunos2.some(function(item) {
    // Verifica se pelo menos um aluno é Backend e Frontend
    // Retorna false, pois nenhum aluno tem ambos os cursos
    // return item.curso === 'Backend' && item.curso === 'Frontend'
    return item.curso === 'Backend'
})

console.log(existeAlgumAlunoDeBackend);

divisoria("Filtrando Somente Alunos de Backend");
// Método Para Filtrar Arrays
// const alunosDeBackend = alunos2.filter(function(item) {
//     return item.curso === 'Backend';
// })
// Ao Invés de usar o código acima, podemos também fazer da seguinte maneira:
function filtroAlunosBackend(aluno) {
    return aluno.curso === 'Backend';
}

const alunosDeBackend = alunos2.filter(filtroAlunosBackend);

console.log(alunosDeBackend);

divisoria("Juntando Itens de um Array em um Único Item - Números");
// Método para juntar todos os itens de um Array em um só
// reduce
const nums = [10, 20, 30, 10];

const soma = nums.reduce(function(acumulador, itemAtual) {
    acumulador += itemAtual;
    return acumulador;
}, 0)

console.log(soma);

divisoria('Juntando Itens de um Array em um Único Item Com o "for"')
// É possível fazer com o "for", porém da mais trabalho
let somaComFor = 0;

for (let i = 0; i < nums.length; i++) {
    somaComFor += nums[i];
}
console.log(somaComFor);

divisoria("Juntando Itens de um Array em um Único Item - Strings");
const nomesDosAlunos = alunos2.reduce(function(acumulador, itemAtual) {
    // Utilizado as Aspas "``" para poder adicionar o Espaço " "
    acumulador += `${itemAtual.nome} `
    return acumulador;
}, '')

console.log(nomesDosAlunos);