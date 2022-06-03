/* Ejercicio #1
Escribir una función que tome un arreglo de números y devuelva el número mayor de la lista. 
Ejemplo del arreglo : [3, 5, 7, 1, 6] */

/* let arreglo = [3, 5, 7, 1, 6];
let max = Math.max(...arreglo);
console.log(max); */

/* Ejercicio #2
María llega a su entrevista de trabajo para el 
rol de Desarrollador Junior y se le pide que 
resuelva este problema: Dada una lista de 
números [-1, 3, 4, 2, 6], escribe una función 
en javascript para calcular  el número más pequeño. */

/* let arreglo = [-1, 3, 4, 2, 6];
let min = Math.min(...arreglo);
console.log(min); */

/* Ejercicio #3
Escribir una función que permita saber si un número se repite dentro de un arreglo.

*Casos de prueba*:

Caso 1: Resultado esperado: El número 5 se encuentra más de una vez
[1, 22, 5, 17, 10, 5, 40, 5]

Caso 2: Resultado esperado: El número 7 se encuentra más de una vez
[7, 41, 5, 7, 10, 13, 2]

Caso 3: Resultado esperado: No hay números repetidos
[1, 22, 5, 14, 24, 31, 27, 15, 105] */

/* const numeros  = [1, 22, 5, 14, 24, 31, 27, 15, 105];
let duplicados = [];

 
const tempArray = [...numeros].sort();
 
for (let i = 0; i < tempArray.length; i++) {
  if (tempArray[i + 1] === tempArray[i]) {
    duplicados.push(tempArray[i]);
  } 

}
console.log(duplicados); */

/* Ejercicio #4
Escribir una función que tome un arreglo ordenado y devuelva un arreglo completamente desordenado
Entrada: [1, 2, 5, 14, 24, 31, 50, 105]
Posible salida: [105, 31, 14, 1, 2, 50, 24, 5] */

const nums = [1, 2, 5, 14, 24, 31, 50, 105]
nums.sort(function(a, b){
 return a - b;
});
const reversed = nums.reverse();
console.log('reversed:', reversed);