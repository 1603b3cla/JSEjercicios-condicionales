/*. Calcular la suma de todos los
elementos de un array bidimensional
utilizando el bucle for tradicional,
for each yfor of
 */

// Definir un array bidimensional
const arrayBidimensional = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

// Método 1: Bucle for tradicional
let sumaFor = 0;
for (let i = 0; i < arrayBidimensional.length; i++) {
    for (let j = 0; j < arrayBidimensional[i].length; j++) {
        sumaFor += arrayBidimensional[i][j];
    }
}
console.log("Suma (for):", sumaFor);

// Método 2: forEach
let sumaForEach = 0;
arrayBidimensional.forEach(row => {
    row.forEach(element => {
        sumaForEach += element;
    });
});
console.log("Suma (forEach):", sumaForEach);

// Método 3: for...of
let sumaForOf = 0;
for (const row of arrayBidimensional) {
    for (const element of row) {
        sumaForOf += element;
    }
}
console.log("Suma (for...of):", sumaForOf);