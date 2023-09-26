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
  obtenerNombre: function () {
    console.log(this.nombre);
  },
  obtenerEdad: function () {
    return this.edad;
  },
};

console.log(datosPersonales);
console.log(datosPersonales.nombre);
console.log(datosPersonales.contacto.email);
console.log(datosPersonales.lenguajes[2]);
datosPersonales.obtenerNombre();
console.log(datosPersonales.obtenerEdad());

/* 

Funciones

Son un conjunto de instrucciones (líneas de código) que van a ejecutar ciertas acciones.
Pueden recibir o no parámetros. Los parámetros son los datos que puede necesitar la función para internamente ejecutar sus sentencias.
Las funciones pueden o no retornar un valor, eso dependerá del propósito de la función.
*/

//Definición
function saludar() {
  console.log("Hola Mundo");
  console.log("Bienvenidos a la Programación Web");
  console.log("JavaScript es el lenguaje de la web");
}

//ejecutar o invocar
saludar();
saludar();
saludar();

function sumar(a, b) {
  let c = a + b;
  return c;
}

sumar(2, 4);
console.log(sumar(8, 9));

let suma = sumar(7, 90);
console.log(suma);

function saludarA(nombre = "Desconocid@") {
  console.log(`Hola ${nombre}, ¿cómo estás?`);
}

saludarA("Ana");
saludarA();

/* POO basada en Clases  */
class Persona {
  //el constructor es un método especial que se ejecuta en el momento de instanciar la clase
  constructor(nombre, apellido) {
    this.nombre = nombre;
    this.apellido = apellido;
  }

  obtenerNombreCompleto() {
    return `${this.nombre} ${this.apellido}`;
  }
}

console.log("***POO con Clases***");
let personaA = new Persona("Irma", "Campos");
console.log(personaA);
console.log(personaA.obtenerNombreCompleto());

let personaB = new Persona("Ricardo", "Osorno");
console.log(personaB);
console.log(personaB.obtenerNombreCompleto());

class Profesor extends Persona {
  constructor(nombre, apellido, materia) {
    super(nombre, apellido);
    this.materia = materia;
  }

  obtenerMateria() {
    return this.materia;
  }

  obtenerNombreCompleto() {
    return `Profr. ${this.nombre} ${this.apellido}`;
  }
}

let profesorA = new Profesor("Jon", "MirCha", "Desarrollo Web");
console.log(profesorA);
console.log(profesorA.obtenerNombreCompleto());
console.log(profesorA.obtenerMateria());
