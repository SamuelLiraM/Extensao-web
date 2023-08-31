function printMatriz(matriz) {
    for (let linha of matriz) {
        console.log(linha.join(' '));
    }
}

function matrizTransposta(matriz) {
    const numlinha = matriz.length;
    const numCols = matriz[0].length;
    const matrizTransposta = [];

    for (let col = 0; col < numCols; col++) {
        const linhaTransposta = [];
        for (let linha = 0; linha < numlinha; linha++) {
            linhaTransposta.push(matriz[linha][col]);
        }
        matrizTransposta.push(linhaTransposta);
    }

    return matrizTransposta;
}

const matrizA = [
    [1, 2],
    [3, 4],
    [5, 6]
];

console.log("Matriz A:");
printMatriz(matrizA);

const transpostaA = matrizTransposta(matrizA);

console.log("\nMatriz Transposta A:");
printMatriz(transpostaA);