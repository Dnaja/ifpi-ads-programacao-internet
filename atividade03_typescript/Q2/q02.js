"use strict";
exports.__esModule = true;
exports.Vendedor = void 0;
var Vendedor = /** @class */ (function () {
    function Vendedor(_nome, _venda) {
        this._nome = _nome;
        this._venda = _venda;
    }
    Vendedor.prototype.retornaTipoComissao = function () {
        var tipoComissao;
        if (this._venda > 5000 && this._venda <= 10000) {
            tipoComissao = 1;
        }
        else if (this._venda > 10000 && this._venda <= 30000) {
            tipoComissao = 2;
        }
        else if (this._venda > 30000) {
            tipoComissao = 3;
        }
        return tipoComissao;
    };
    Vendedor.prototype.calculaComissao = function () {
        var comissao = 0;
        var comissaoParcial = 0;
        if (this.retornaTipoComissao() == 1) {
            comissao += (this._venda - 5000) * (5 / 100);
        }
        else if (this.retornaTipoComissao() == 2) {
            comissaoParcial += 10000 * (5 / 100);
            comissao += ((this._venda - 10000) * (10 / 100)) + comissaoParcial;
        }
        else if (this.retornaTipoComissao() == 3) {
            comissao += this._venda * (20 / 100);
        }
        return comissao;
    };
    Vendedor.prototype.calculaSalario = function () {
        var salario = 1100;
        salario += this.calculaComissao();
        return salario;
    };
    Vendedor.prototype.mostraResultado = function () {
        var comissao1 = 0;
        var comissao2 = 0;
        var comissao3 = 0;
        var resultado = 'nome| c1| c2| c3| ctotal| salario final\n';
        if (this.retornaTipoComissao() == 1) {
            comissao1 += this.calculaComissao();
        }
        else if (this.retornaTipoComissao() == 2) {
            comissao1 += 10000 * (5 / 100);
            comissao2 += (this._venda - 10000) * (10 / 100);
        }
        else if (this.retornaTipoComissao() == 3) {
            comissao3 += this.calculaComissao();
        }
        resultado += this._nome + '  ' + comissao1 + '  ' + comissao2 + '  ' + comissao3 + '  ' +
            this.calculaComissao() + '  ' + this.calculaSalario() + '\n';
        return resultado;
    };
    return Vendedor;
}());
exports.Vendedor = Vendedor;
