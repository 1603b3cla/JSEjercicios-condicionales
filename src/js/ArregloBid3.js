// Definir una matriz de enteros
const matrizEnteros = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

// Inicializar contadores
let pares = 0;
let impares = 0;

// Arrays para almacenar números pares e impares
const numerosPares = [];
const numerosImpares = [];

// Recorrer la matriz y contar y almacenar los números pares e impares
for (let i = 0; i < matrizEnteros.length; i++) {
    for (let j = 0; j < matrizEnteros[i].length; j++) {
        const numero = matrizEnteros[i][j];
        if (numero % 2 === 0) {
            pares++;
            numerosPares.push(numero);
        } else {
            impares++;
            numerosImpares.push(numero);
        }
    }
}

// Mostrar resultados
console.log("Total de números pares:", pares);
console.log("Números pares:", numerosPares);
console.log("\nTotal de números impares:", impares);
console.log("Números impares:", numerosImpares);