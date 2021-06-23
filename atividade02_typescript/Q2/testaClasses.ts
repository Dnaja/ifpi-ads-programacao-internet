import {Personagem, Soldado, Cavaleiro} from './personagens';
import {Jogo} from './jogo';

let p1: Personagem;
p1 = new Personagem(1, 'P1', 100);

let p2: Soldado;
p2 = new Soldado(2, 'P2', 200, 11);

let p3: Soldado;
p3 = new Soldado(3, 'P3', 100, 10);

let p4: Cavaleiro;
p4 = new Cavaleiro(4, 'P4', 100, 10);

let p5: Cavaleiro;
p5 = new Cavaleiro(4, 'P4', 100, 10); // não entra na lista

let j1: Jogo;
j1 = new Jogo([]);

j1.incluir(p1);
j1.incluir(p2);
j1.incluir(p3);
j1.incluir(p4);
j1.incluir(p5);

j1.atacar(1, 2);
j1.avaliar_batalha();
j1.atacar(2, 1);
j1.avaliar_batalha();
j1.atacar(3, 2);
j1.avaliar_batalha();
j1.atacar(4, 3);
j1.avaliar_batalha();
j1.atacar(2, 4);
j1.avaliar_batalha();
