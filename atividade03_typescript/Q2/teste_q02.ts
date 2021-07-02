import { Vendedor } from "./q02"; 

let v1: Vendedor = new Vendedor('João', 4500); // sem comissao
console.log(v1.mostraResultado());

let v2: Vendedor = new Vendedor('Maria', 10000); // comissao1
console.log(v2.mostraResultado());

let v3: Vendedor = new Vendedor('Cláudia', 13000); // comissao1 e comissao2
console.log(v3.mostraResultado());

let v4: Vendedor = new Vendedor('José', 31000); // comissao3
console.log(v4.mostraResultado());
