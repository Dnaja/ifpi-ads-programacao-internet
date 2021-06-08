var Estados;
(function (Estados) {
    Estados[Estados["PI"] = 0] = "PI";
    Estados[Estados["CE"] = 1] = "CE";
    Estados[Estados["MA"] = 2] = "MA";
})(Estados || (Estados = {}));
for (var i = 0; i < 3; i++) {
    console.log(Estados[i]);
}
var e1 = Estados.PI;
var e2 = Estados.CE;
var e3 = Estados.MA;
var estadosArray = [e1, e2, e3];
for (var x = 0; x < estadosArray.length; x++) {
    console.log(estadosArray[x]);
}
