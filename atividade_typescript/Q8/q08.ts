class MeuNumero {
    constructor(readonly numero: number) {}

    getInteiro() {
        return Math.floor(this.numero);
    }

    getDecimal() {
        let dec: number = this.numero - (Math.floor(this.numero));
        return dec;
    }
}

let num: MeuNumero = new MeuNumero(7.75);
console.log(num.getInteiro());
console.log(num.getDecimal());
