function exibir() {
    var elementos = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        elementos[_i] = arguments[_i];
    }
    for (var _a = 0, elementos_1 = elementos; _a < elementos_1.length; _a++) {
        var elemento = elementos_1[_a];
        console.log(elemento);
    }
}

exibir("a", "b");
exibir("a", "b", "c");
exibir("a", "b", "c", "d");
