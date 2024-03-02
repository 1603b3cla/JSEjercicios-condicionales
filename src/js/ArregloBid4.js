// Definir un array bidimensional
const arrayBidimensional = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

// Utilizar el método reduce para calcular la suma de cada fila
const sumaPorFila = arrayBidimensional.map(row => row.reduce((acc, curr) => acc + curr, 0));

// Mostrar los resultados
console.log("Suma por fila:", sumaPorFila);