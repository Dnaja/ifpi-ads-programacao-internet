var Transacao = /** @class */ (function () {
    function Transacao(valor, desconto) {
        this.valor = valor;
        this.desconto = desconto;
    }
    Transacao.prototype.calculaDesconto = function () {
        return this.valor * (1 - (this.desconto / 100));
    };
    Object.defineProperty(Transacao.prototype, "Valor", {
        get: function () {
            return this.valor;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Transacao.prototype, "Desconto", {
        get: function () {
            return this.desconto;
        },
        enumerable: false,
        configurable: true
    });
    return Transacao;
}());
var t = new Transacao(1000, 5);
console.log(t.calculaDesconto());
console.log(t.Valor + " - " + t.Desconto);
