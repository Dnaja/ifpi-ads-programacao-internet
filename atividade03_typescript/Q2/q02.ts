class Vendedor {
    constructor(private _nome: string, private _venda: number) {}

    retornaTipoComissao(): number {
        let tipoComissao: number;

        if (this._venda > 5000 && this._venda <= 10000) {
            tipoComissao = 1;
        } else if (this._venda > 10000 && this._venda <= 30000) {
            tipoComissao = 2;
        } else if (this._venda > 30000) {
            tipoComissao = 3;
        }

        return tipoComissao;
    }

    calculaComissao(): number {
        let comissao: number = 0;
        let comissaoParcial: number = 0;
        
        if (this.retornaTipoComissao() == 1) {
            comissao += (this._venda-5000) * (5/100);

        } else if (this.retornaTipoComissao() == 2) {
            comissaoParcial += 10000 * (5/100);
            comissao += ((this._venda-10000) * (10/100)) + comissaoParcial;

        } else if (this.retornaTipoComissao() == 3) {
            comissao += this._venda * (20/100);
        }

        return comissao;
    }

    calculaSalario(): number {
        let salario: number = 1100;
        salario += this.calculaComissao();
        return salario;
    }

    mostraResultado(): string {
        let comissao1: number = 0;
        let comissao2: number = 0;
        let comissao3: number = 0;

        let resultado: string = 'nome| c1| c2| c3| ctotal| salario final\n'

        if (this.retornaTipoComissao() == 1) {
            comissao1 += this.calculaComissao();
        } else if (this.retornaTipoComissao() == 2) {
            comissao1 += 10000 * (5/100);
            comissao2 += (this._venda-10000) * (10/100);
        } else if (this.retornaTipoComissao() == 3) {
            comissao3 += this.calculaComissao();
        }

        resultado += this._nome + '  ' + comissao1 + '  ' + comissao2 + '  ' + comissao3 + '  ' +
         this.calculaComissao() + '  ' + this.calculaSalario() + '\n';
        
        return resultado;
    }


}

export { Vendedor};