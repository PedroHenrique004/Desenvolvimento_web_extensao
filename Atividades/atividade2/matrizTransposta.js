function transporMatriz(A) {
    let linhas = A.length;
    let colunas = A[0].length;
    
    let matrizT = Array.from({ length: colunas }, () => Array(linhas).fill(0));

    for (let a = 0; a < linhas; a++) {
        for (let b = 0; b < colunas; b++) {
            matrizT[b][a] = A[a][b]; 
        }
    }

    return matrizT;
}

let linhas = parseInt(prompt("Quantas linhas terá a matriz?"));
let colunas = parseInt(prompt("Quantas colunas terá a matriz?"));

let matriz = [];

for (let l = 0; l < linhas; l++) {
    matriz[l] = [];
    for (let c = 0; c < colunas; c++) {
        matriz[l][c] = parseInt(prompt(`Digite o valor para posição [${l}][${c}]:`));
    }
}

console.log("Matriz Original:");
console.table(matriz);


let matrizTransposta = transporMatriz(matriz);

console.log("Matriz Transposta:");
console.table(matrizTransposta);
