"use strict";
exports.__esModule = true;
var q01_1 = require("./q01");
var vc1 = new q01_1.VariacaoCasos(100, 95); // estabilidade
console.log(vc1.exibeMensagem());
var vc2 = new q01_1.VariacaoCasos(95, 200); // alta
console.log(vc2.exibeMensagem());
var vc3 = new q01_1.VariacaoCasos(100, 70); // queda
console.log(vc3.exibeMensagem());
