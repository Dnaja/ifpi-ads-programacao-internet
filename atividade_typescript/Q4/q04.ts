enum DiasSemana {
    Domingo,
    Segunda,
    Terça,
    Quarta,
    Quinta,
    Sexta,
    Sabado,
}

namespace DiasSemana {
    export function isDiaUtil(DiasSema) {
        if (DiasSema == DiasSemana.Sabado || DiasSema == DiasSemana.Domingo) {
            console.log("false");
        } else {
            console.log("true");
        }
    }
}

let d1: DiasSemana = DiasSemana.Domingo;
let d2: DiasSemana = DiasSemana.Sexta;
let d3: DiasSemana = DiasSemana.Sabado;
let testa_dia: DiasSemana [] = [d1, d2, d3];

for (let dia of testa_dia) {
    DiasSemana.isDiaUtil(dia);
}