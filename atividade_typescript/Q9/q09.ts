class Transacao {
    constructor(readonly valor: number, readonly desconto: number) {}

    calculaDesconto() {
        return this.valor * (1-(this.desconto/100));
    }

    get Valor(): number {
        return this.valor;
    }

    get Desconto(): number {
        return this.desconto;
    }
}

let t: Transacao = new Transacao(1000, 5);
console.log(t.calculaDesconto());
console.log(t.Valor + " - " + t.Desconto);

