const calculadora = {
    somar: function(a, b) {
        return a + b;
    },
    subtrair: function(a, b) {
        return a - b;
    },
    multiplicar: function(a, b) {
        return a * b;
    },
    dividir: function(a, b) {
        if (b == 0) {
            throw new Error("Não é possível dividir por zero.");
        }
        return a / b;
    },
    fatorial: function(n) {
        if (n == 0 || n == 1) {
            return 1;
        }
        return n * this.fatorial(n - 1);
    }
};

console.log(calculadora.somar(5, 3));
console.log(calculadora.subtrair(10, 4));
console.log(calculadora.multiplicar(7, 2));
console.log(calculadora.dividir(20, 5));
console.log(calculadora.fatorial(5));