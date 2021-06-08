enum Estados {
    PI,
    CE,
    MA,
}

for (let i: number = 0; i < 3; i++){
    console.log(Estados[i]);
}

let e1: Estados = Estados.PI;
let e2: Estados = Estados.CE;
let e3: Estados = Estados.MA;
let estadosArray: Estados[] = [e1, e2, e3];

for (let x: number = 0; x < estadosArray.length; x++) {
    console.log(estadosArray[x]);
}
