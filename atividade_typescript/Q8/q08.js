var MeuNumero = /** @class */ (function () {
    function MeuNumero(numero) {
        this.numero = numero;
    }
    MeuNumero.prototype.getInteiro = function () {
        return Math.floor(this.numero);
    };
    MeuNumero.prototype.getDecimal = function () {
        var dec = this.numero - (Math.floor(this.numero));
        return dec;
    };
    return MeuNumero;
}());
var num = new MeuNumero(7.75);
console.log(num.getInteiro());
console.log(num.getDecimal());
