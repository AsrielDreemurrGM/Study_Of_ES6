function divisoria(texto) {
    console.log("-------------------------------------------------------------------");
    console.log(texto);
    console.log("-------------------------------------------------------------------");
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
    // Um recurso mais recente do ES (não o ES6) são os Campos Privados;
    // Fazemos isso com o uso da Hashtag "#";
    // Quando privado, o atributo só é acessível dentro do Objeto;
    #HP = 100;
    // Para conseguirmos Retornar um Valor Privado, precisamos criar um Método;
    exibeHP() {
        console.log(this.#HP);
    }

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

    recebeuAtaque() {
        this.#HP -= 10;
        // Só funciona se HP não for um Atributo Privado;
        // this.HP -= 10;
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

divisoria('Herdando de "PokemonAtravesDeClasse" - Executando a Classe Pikachu');
// Utilizamos a palavra "extends", seguido de onde estamos Herdando os Atributos;
class Pikachu extends PokemonAtravesDeClasse {
    // Não passamos argumentos, pois já sabemos as informações:
    // Pikachu é o nome e Elétrico é o seu tipo;
    constructor() {
        // Para chamar o Constructor da Classe Mãe utilizamos a palavra reservada "super";
        super('Pikachu', 'Elétrico');
    }
    // Podemos Sobrescrever o Método;
    atacar() {
        console.log(`${this.nome} atacou com Choque do Trovão`);
    }
};

// Utilizando o Constructor, não precisamos passar os valores na criação da Constante;
// const pikachuDoAsh = new Pikachu("Pikachu", "Elétrico");
const pikachuDoAsh = new Pikachu();

console.log(pikachuDoAsh);

// Repara-se que, no Terminal, agora, se distingue que a Primeira Instância se
// origina de "PokemonAtravesDeClasse" e a Nova Instância tem origem da Classe "Pikachu";

divisoria('Verificando se "pikachuDoAsh" Pertence a Instâncias');
// Retorna True ou False;
console.log(`Pikachu Do Ash é uma instância de Pikachu? ${pikachuDoAsh instanceof Pikachu}`);
console.log(`Pikachu Do Ash é uma instância de PokemonAtravesDeClasse? ${pikachuDoAsh instanceof PokemonAtravesDeClasse}`);
// Quando fazemos a Herança, as Instâncias da Classe Filha também são considerads Instância da Classe Mãe;

divisoria('HP do Pikachu');
// Só funciona se HP não for um Atributo Privado;
// console.log(`pikachuDoAsh.hp`);
// Chamando Método para conseguir o Valor Privado;
pikachuDoAsh.exibeHP();

divisoria('Pikachu é Atacado');
pikachuDoAsh.recebeuAtaque();

// Só funciona se HP não for um Atributo Privado;
// console.log(`HP do Pikachu: ${pikachuDoAsh.hp}`);
pikachuDoAsh.exibeHP();

divisoria('Pikachu Ataca');
pikachuDoAsh.atacar();