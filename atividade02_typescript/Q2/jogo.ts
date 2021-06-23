import {Personagem, Soldado, Cavaleiro} from "./personagens";

// classe do jogo
class Jogo {
    arrayPersonagem: Personagem[];

    constructor(arrayPersonagem: Personagem[]) {
        this.arrayPersonagem = arrayPersonagem;
    }

    incluir(p: Personagem) {
        if (this.consultar(p.id) == null) {
            this.arrayPersonagem.push(p);
        }
    }

    consultar(id: number) {
        let personagemProcurado: Personagem = null;

        for (let i: number = 0; i < this.arrayPersonagem.length; i++) {
            if (this.arrayPersonagem[i].id == id) {
                personagemProcurado = this.arrayPersonagem[i];
            }
        }
        return personagemProcurado;
    }

    atacar(id1: number, id2: number) {
        if (id1 != id2) {
            let p1: Personagem = this.consultar(id1);
            let p2: Personagem = this.consultar(id2);
            
            if (p1 instanceof Soldado || p1 instanceof Cavaleiro) {
                p1.atacar(p2);
            } else {
                console.log("Não é possível atacar!");
            }
        }
    }

    avaliar_batalha() {
        console.log("id|nome|energia|vivo");
        for (let i: number = 0; i < this.arrayPersonagem.length; i++) {
            this.arrayPersonagem[i].validaEnergia();

            console.log(this.arrayPersonagem[i].id + "   " + 
            this.arrayPersonagem[i].nome + "   " + this.arrayPersonagem[i].energia
            + "   " + this.arrayPersonagem[i].estaVivo());
        }
        console.log("\n");
    }
}


export {Jogo}
