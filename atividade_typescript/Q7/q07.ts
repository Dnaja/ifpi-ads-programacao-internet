const array = [1 , 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

const array2 = array.filter((valorAtual) => {
    if (valorAtual % 2 == 0) {
        return valorAtual;
    }
});

for (let i: number = 0; i < array2.length; i++) {
    console.log(array2[i]);
}
