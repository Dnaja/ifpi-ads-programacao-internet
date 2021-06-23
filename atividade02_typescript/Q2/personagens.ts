// classes dos personagens
class Personagem {
    id: number;
    nome: string;
    energia: number;

    constructor(id: number, nome: string, energia: number) {
        this.id = id;
        this.nome = nome;
        this.energia = energia;
    }

    validaEnergia() {
        if (this.energia > 100) {
            this.energia = 100;
        } else if (this.energia < 0) {
            this.energia = 0;
        }
    }

    estaVivo() {
        this.validaEnergia();
        return this.energia != 0;
    }

    defenderAtaque(ataque: number) {
        this.validaEnergia();
        if (this.energia < ataque) {
            this.energia = 0;
        } else {
            this.energia -= ataque;
        }  
    }
}


class Soldado extends Personagem{
    forcaAtaque: number;

    constructor(id: number, nome: string, energia: number, forcaAtaque: number) {
        super(id, nome, energia);
        this.forcaAtaque = forcaAtaque;
    }

    validaForcaAtaque() {
        if (this.forcaAtaque > 10) {
            this.forcaAtaque = 10;
        } else if (this.forcaAtaque < 0) {
            this.forcaAtaque = 0;
        }
    }

    defenderAtaque(ataque: number) {
        this.validaEnergia();
        ataque /= 2;
        if (this.energia < ataque) {
            this.energia = 0;
        } else {
            this.energia -= ataque;
        }
    }

    atacar(p: Personagem) {
        this.validaForcaAtaque();
        p.defenderAtaque(this.forcaAtaque);
    }
}


class Cavaleiro extends Soldado {
    defenderAtaque(ataque: number) {
        this.validaEnergia();
        ataque /= 3;
        if (this.energia < ataque) {
            this.energia = 0;
        } else {
            this.energia -= ataque;
        }
    }

    atacar(p: Personagem) {
        this.validaForcaAtaque();
        p.defenderAtaque(2 * this.forcaAtaque);
    }
}


export {Personagem, Soldado, Cavaleiro}
