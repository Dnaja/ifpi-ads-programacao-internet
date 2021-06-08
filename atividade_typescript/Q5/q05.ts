function exibir(...elementos: string[]) {
    for (let elemento of elementos) {
        console.log(elemento);
    }
}

exibir("a", "b");
exibir("a", "b", "c");
exibir("a", "b", "c", "d");