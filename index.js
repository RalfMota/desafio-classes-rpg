// Escrevendo as classes de um Jogo

//a classe Heroi possui uma propriedade tipo que define o tipo do herói. O método atacar utiliza um switch para determinar a descrição do ataque de acordo com o tipo do herói.

//Crie uma classe generica que represente um herói de uma aventura e que possua as seguintes propriedades:

//nome
//idade
//tipo (ex: guerreiro, mago, monge, ninja )

class Heroi {
    constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo; 
}

//deve ter um método chamado atacar que deve atender os seguientes requisitos:
//exibir a mensagem: "o {tipo} atacou usando {ataque}")
//aonde o {tipo} deve ser concatenando o tipo que está na propriedade da classe
//e no {ataque} deve seguir uma descrição diferente conforme o tipo, seguindo a tabela abaixo:
//se mago -> no ataque exibir (usou magia) se guerreiro -> no ataque exibir (usou espada) se monge -> no ataque exibir (usou artes marciais) se ninja -> no ataque exibir (usou shuriken)

atacar() {
    let ataque;
    switch (this.tipo) {
        case 'mago':
            ataque = 'usou magia';
            break;
        case 'guerreiro':
                ataque = 'usou espada';
        case 'monge':
            ataque = 'usou artes marciais';
            break;
        case 'ninja': 
            ataque = 'usou shuriken';
            break;
            default:
                ataque = 'usou habilidade';
        }
        console.log(`o ${this.tipo} atacou usando ${ataque}`);
    }

}

//declarando entradas e saídas

let heroi1 = new Heroi('John' , 30 , 'mago');
heroi1.atacar(); // saída: mago atacou usando usou magia

let heroi2 = new Heroi('Peter' , 25, 'guerreiro');
heroi2.atacar(); //saída: guerreiro atacou usando usou espada

let heroi3 = new Heroi('Joe' , 35, 'monge');
heroi3.atacar(); // saída: monge atacou usando usou artes marciais

let heroi4 = new Heroi('Mike', 40, 'ninja');
heroi4.atacar(); // saída: ninja atacou usando usou shuriken

