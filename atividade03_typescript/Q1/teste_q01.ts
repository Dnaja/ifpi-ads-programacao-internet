import { VariacaoCasos } from "./q01";

let vc1: VariacaoCasos = new VariacaoCasos(100, 95);  // estabilidade
console.log(vc1.exibeMensagem());

let vc2: VariacaoCasos = new VariacaoCasos(95, 200);  // alta
console.log(vc2.exibeMensagem());

let vc3: VariacaoCasos = new VariacaoCasos(100, 70); // queda
console.log(vc3.exibeMensagem());