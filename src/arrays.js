const redesSociais = ['Facebook', 'Instagram', 'Twitter'];

// Chamando Array de maneira normal
// for (let i = 0; i < redesSociais.length; i++) {
//     console.log(`Eu tenho perfil na rede social: ${redesSociais[i]}`)
// }

// Chamando Array utilizando o ES6+
redesSociais.forEach(function(nomeDaRedeSocial, indice) {
    console.log(`#${indice} Eu tenho perfil na rede social: ${nomeDaRedeSocial}`)
})

// Método "map"
// Podemos iterar um Array e criar um novo array
// Exemplo 1:
const alunos = ['Gustavo', 'Julia', 'Eduardo', 'Wagner'];

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

// Exemplo 2:
const numeros = [1, 2, 3, 4, 5];
const dobroDosNumeros = numeros.map(function(numeroAtual) {
    // numeroAtual = numeroAtual * 2;
    // Podemos fazer direto no "return";
    return numeroAtual * 2;
})

console.log(dobroDosNumeros);