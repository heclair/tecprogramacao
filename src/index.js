function somar(a, b) {
    if (a < b) {
        return a + b; //somar
    }
    else {
        return "" + a + b; //concatenar
    }
}
console.log("Resultado:", somar(1, 2));
console.log("Resultado:", somar(5, 3));
