console.log("Hola mundo desde el archivo fundamentos.js");

// comentario de una línea

/* 
comentario 
de 
varias
líneas
*/

/* let nombre = "Jonathan";
let Nombre = "Ulises";
let NOMBRE = "Jonathan Ulises"; */

let nombre = "Jonathan",
  Nombre = "Ulises",
  NOMBRE = "Jonathan Ulises",
  apellidos = "Miranda Charles";

console.log(nombre);
console.log(Nombre);
console.log(NOMBRE);
console.log(nombre, Nombre, NOMBRE);

console.log(typeof nombre);

let edad = 39,
  temperatura = 20.45,
  negativos = -19,
  falso = false,
  verdadero = true;

console.log(edad, temperatura, negativos, falso, verdadero);
console.log(typeof edad);
console.log(typeof temperatura);
console.log(typeof negativos);
console.log(typeof falso);
console.log(typeof verdadero);

//Concatenación: el operador + une strings y variables, podemos usar "" o ''
let mensajeConcatenado =
  "Hola, mi nombre es, " +
  nombre +
  " " +
  Nombre +
  " " +
  apellidos +
  ", y tengo " +
  edad +
  " años. Este mensaje ha sido concatenado.";

console.log(mensajeConcatenado);

//Interpolación: Usa template strings `Cadena de texto ${variable}`;

let mensajeInterpolado = `Hola, mi nombre es ${nombre} ${Nombre} ${apellidos}, y tengo ${edad} años. Este mensaje ha sido interpolado.`;
console.log(mensajeInterpolado);

/*  
Definición de variables

La palabra resevada para declarar una variable es let, también se puede usar var, pero actualmente var es considerada mala práctica.
Las variables que se declaran con var son GLOBALES.

let - genera variables de bloque (BUENA PRÁCTICA)
var - genera variables globales (MALA PRÁCTICA)

Las variables tienen un ámbito o alcance.

Bloques - un bloque define el alcance o el ámbito una variable, cada vez que escribimos un {} estamos definiendo un bloque
*/

/* console.log(holaLet);
let holaLet = "Hola mundo"; */

/* console.log(holaVar);
var holaVar = "Hola mundo"; */

/* var hola = "Hola Mundo";
console.log(hola);

{
  var hola = "Hello World";
  console.log(hola);
}

console.log(hola); */

let hola = "Hola Mundo";
console.log(hola);

/* Con {} puedes declarar bloques o ámbitos(scope) de código independientes */
{
  let hola = "Hello World";
  console.log(hola);
}

console.log(hola);

/* Arrays / Arreglos -> es una lista de elementos */
let colores = ["negro", "blanco", "rojo", "verde", "azul"];
console.log(colores);
console.log(colores[1]);
console.log(colores.reverse());
console.log(colores.length);
console.log(colores[1]);

let miArray = ["jon", 39, false, ["HTML", "CSS", "JS"]];
console.log(miArray[1]);
console.log(miArray[3][1]);
console.log(miArray);

/* 
Objects / objetos -> colección de datos agrupados en pares de clave:valor
*/
let datosPersonales = {
  nombre: "Jon",
  edad: 39,
  soyProfesor: true,
  lenguajes: ["HTML", "CSS", "JS"],
  contacto: {
    email: "jonmircha@gmail.com",
    movil: "5512345678",
    instagram: "jonmircha",
  },
};

console.log(datosPersonales);
console.log(datosPersonales.nombre);
console.log(datosPersonales.contacto.email);
console.log(datosPersonales.lenguajes[2]);
