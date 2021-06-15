interface Iteravel<T> {
    data : T[];
    
    proximo();
    atual();
    isPrimeiro();
    isUltimo();
    irParaPrimeiro();
}


class ColecaoArray <T> {
    private _data : T[] = [];

    adiciona(item: T) {
        this._data.push(item);
    }

    proximo() {
        return this._data[];
    }
    atual() {
        return this._data;
    }
    isPrimeiro(item: T) {
        return item == this._data[0];
    }
    isUltimo(item: T) {
        return item == this._data[this._data.length-1];
    }
    irParaPrimeiro() {
        return this._data[0];
    }

}



let ca = new ColecaoArray<number>();
ca.adiciona(1);
ca.adiciona(2);
ca.adiciona(3);