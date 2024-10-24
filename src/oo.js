function divisoria(texto) {
    console.log("---------------------------------------------------------");
    console.log(texto);
    console.log("---------------------------------------------------------");
}
// Orientação a Objetos
// Antes do ES6+ era necessário fazer a Orientação de Objetos
// através de Funções Constrututoras;
divisoria('Objeto Através de Função Construtora');
function PokemonFuncaoConstrutora(nomeDoPokemon, tipoDoPokemon) {
    this.nome = nomeDoPokemon;
    this.tipo = tipoDoPokemon;
}

const pikachuFuncaoConstrutora = new PokemonFuncaoConstrutora("Pikachu", "Elétrico");
console.log(pikachuFuncaoConstrutora);

divisoria('Objeto Através de Classe');
// Com o ES6+ foram introduzidas as Classes, então podemos criar Classes
// no lugar de Funções Construtoras;
class PokemonAtravesDeClasse {
    // Ao criar o Constructor, esta parte se torna desnecessária;
    // nome = '';
    // tipo = '';

    // Para criar um Construtor precisamos criar uma função;
    constructor(nomeDoPokemon, tipoDoPokemon) {
        this.nome = nomeDoPokemon;
        this.tipo = tipoDoPokemon;
    }

    // Outra mudança com o ES6+ foi a questão das Funções dentro dos Objetos (Métodos);
    // Para criar um Método;
    atacar(nomeDoAtaque) {
        console.log(`${this.nome} atacou com ${nomeDoAtaque}`);
    }
}

// Para poder fornecer os valores na criação do Novo Objeto, precisamos
// ter criado o Constructor;
const pikachuAtravesDeClasse = new PokemonAtravesDeClasse('Pikachu', 'Elétrico');
// Sem o Constructor forneceriamos os valores desta maneira:
// pikachuAtravesDeClasse.nome = 'Pikachu';
// pikachuAtravesDeClasse.tipo = 'Elétrico';
console.log(pikachuAtravesDeClasse);

divisoria("Executando Método do Objeto");
pikachuAtravesDeClasse.atacar('Choque do Trovão');

