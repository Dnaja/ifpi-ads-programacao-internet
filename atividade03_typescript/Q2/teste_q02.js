"use strict";
exports.__esModule = true;
var q02_1 = require("./q02");
var v1 = new q02_1.Vendedor('João', 4500); // sem comissao
console.log(v1.mostraResultado());
var v2 = new q02_1.Vendedor('Maria', 10000); // comissao1
console.log(v2.mostraResultado());
var v3 = new q02_1.Vendedor('Cláudia', 13000); // comissao1 e comissao2
console.log(v3.mostraResultado());
var v4 = new q02_1.Vendedor('José', 31000); // comissao3
console.log(v4.mostraResultado());
