"use strict";
exports.__esModule = true;
exports.VariacaoCasos = void 0;
var VariacaoCasos = /** @class */ (function () {
    function VariacaoCasos(_mediaAnterior, _mediaAtual) {
        this._mediaAnterior = _mediaAnterior;
        this._mediaAtual = _mediaAtual;
    }
    VariacaoCasos.prototype.calculaVariacaoPorcentagem = function () {
        var porcentagem = 0;
        porcentagem = ((this._mediaAtual - this._mediaAnterior) / this._mediaAnterior) * 100;
        return porcentagem;
    };
    VariacaoCasos.prototype.exibeMensagem = function () {
        if (this.calculaVariacaoPorcentagem() < 15 && this.calculaVariacaoPorcentagem() > -15) {
            return 'Em estabilidade';
        }
        else if (this.calculaVariacaoPorcentagem() < -15) {
            return 'Em queda';
        }
        else {
            return 'Em alta';
        }
    };
    return VariacaoCasos;
}());
exports.VariacaoCasos = VariacaoCasos;
