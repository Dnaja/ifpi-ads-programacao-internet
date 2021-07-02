class VariacaoCasos {
    constructor(private _mediaAnterior: number, private _mediaAtual: number) {}

    calculaVariacaoPorcentagem(): number {
        let porcentagem: number = 0;
        porcentagem = ((this._mediaAtual - this._mediaAnterior) / this._mediaAnterior) * 100;
        return porcentagem;
    }

    exibeMensagem(): string {
        if (this.calculaVariacaoPorcentagem() < 15 && this.calculaVariacaoPorcentagem() > -15) {
            return 'Em estabilidade';
        } else if (this.calculaVariacaoPorcentagem() < -15) {
            return 'Em queda';
        } else {
            return 'Em alta';
        }
    }


}

export { VariacaoCasos };