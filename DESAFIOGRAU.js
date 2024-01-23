class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataque;
        switch(this.tipo) {
            case 'mago':
                ataque = 'magia Petrificus Totalus';
                break;
            case 'guerreiro':
                ataque = 'espada Navalha do Inferno';
                break;
            case 'monge':
                ataque = 'artes marciais Fúria do Dragão';
                break;
            case 'ninja':
                ataque = 'shuriken Vórtice da Sombra Crescente';
                break;
            default:
                ataque = 'ataque Básico';
        }
        console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
}

let heroi = new Heroi('John', 25, 'mago');
heroi.atacar();