// Definir una matriz
const matrizOriginal = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

// Obtener el número de filas y columnas
const filas = matrizOriginal.length;
const columnas = matrizOriginal[0].length;

// Crear una nueva matriz para la transposición
const matrizTranspuesta = Array.from({ length: columnas }, () => Array(filas).fill(0));

// Realizar la transposición (intercambiar filas por columnas)
for (let i = 0; i < filas; i++) {
    for (let j = 0; j < columnas; j++) {
        matrizTranspuesta[j][i] = matrizOriginal[i][j];
    }
}

// Mostrar la matriz original
console.log("Matriz Original:");
console.log(matrizOriginal);

// Mostrar la matriz transpuesta
console.log("\nMatriz Transpuesta:");
console.log(matrizTranspuesta);