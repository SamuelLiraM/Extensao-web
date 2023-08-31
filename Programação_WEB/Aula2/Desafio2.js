function multMatriz(matrizA, matrizB) {
    const numlinhasA = matrizA.length;
    const numColsA = matrizA[0].length;
    const numlinhasB = matrizB.length;
    const numColsB = matrizB[0].length;

    if (numColsA !== numlinhasB) {
        console.log("Não é possível calcular.");
        return null;
    }

    const resultMatriz = new Array(numlinhasA);
    for (let i = 0; i < numlinhasA; i++) {
        resultMatriz[i] = new Array(numColsB).fill(0);
    }

    for (let i = 0; i < numlinhasA; i++) {
        for (let j = 0; j < numColsB; j++) {
            for (let k = 0; k < numColsA; k++) {
                resultMatriz[i][j] += matrizA[i][k] * matrizB[k][j];
            }
        }
    }

    return resultMatriz;
}

const matrizA = [
    [1, 3],
    [2, 5]
];

const matrizB = [
    [2, 2],
    [0, 1]
];

const resultMatriz = multMatriz(matrizA, matrizB);

if (resultMatriz !== null) {
    console.log("Matriz resultante:");
    for (let linha of resultMatriz) {
        console.log(linha.join(' '));
    }
}
