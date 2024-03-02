// Definir un array bidimensional
const arrayBidimensional = [
    [1, 5, 3],
    [8, 2, 4],
    [7, 6, 9]
];

// Obtener un array plano (flatten) para facilitar la búsqueda
const flattenArray = arrayBidimensional.flat();

// Encontrar el valor máximo y mínimo
const max = Math.max(...flattenArray);
const min = Math.min(...flattenArray);

// Mostrar los resultados
console.log("Valor máximo:", max);
console.log("Valor mínimo:", min);