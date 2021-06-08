var DiasSemana;
(function (DiasSemana) {
    DiasSemana[DiasSemana["Domingo"] = 0] = "Domingo";
    DiasSemana[DiasSemana["Segunda"] = 1] = "Segunda";
    DiasSemana[DiasSemana["Ter\u00E7a"] = 2] = "Ter\u00E7a";
    DiasSemana[DiasSemana["Quarta"] = 3] = "Quarta";
    DiasSemana[DiasSemana["Quinta"] = 4] = "Quinta";
    DiasSemana[DiasSemana["Sexta"] = 5] = "Sexta";
    DiasSemana[DiasSemana["Sabado"] = 6] = "Sabado";
})(DiasSemana || (DiasSemana = {}));
(function (DiasSemana) {
    function isDiaUtil(DiasSema) {
        if (DiasSema == DiasSemana.Sabado || DiasSema == DiasSemana.Domingo) {
            console.log("false");
        }
        else {
            console.log("true");
        }
    }
    DiasSemana.isDiaUtil = isDiaUtil;
})(DiasSemana || (DiasSemana = {}));
var d1 = DiasSemana.Domingo;
var d2 = DiasSemana.Sexta;
var d3 = DiasSemana.Sabado;
var testa_dia = [d1, d2, d3];
for (var _i = 0, testa_dia_1 = testa_dia; _i < testa_dia_1.length; _i++) {
    var dia = testa_dia_1[_i];
    DiasSemana.isDiaUtil(dia);
}
