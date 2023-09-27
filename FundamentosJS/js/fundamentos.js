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

/*
  Estructuras de Control:
    Mecanismo que nos permite controlar el flujo de nuestra programación.

    1) Estructuras Condicionales 
      - if - else
      - if - else if - else (ifs anidados)
      - switch - case (condicional múltiple)
      - Operador Ternario (Simplificación de un if - else)
    2) Estructuras Cíclicas o Repetitivas
      - for: for, for in, for of, forEach
      - while
 
  Tipos de Operadores
    1) Operadores Aritméticos
      +, - , *, / y %
    2) Operadores Relacionales
      >, <, >=, <=, ==, ===, !=, !==
    3) Operadores de Tipos de Datos
      typeof, instanceof 
    4) Operadores Lógicos
      && - AND - Y - todas las condiciones deben cumplirse
      || - OR - O - al menos una de las condiciones debe cumplirse
      ! - NOT - NEGACIÓN 
    5) Operadores de incremento o decremento
      i++, i--, i+=2, i-=4
*/

let age = 39;

if (age > 17) {
  console.log("Mayor de edad");
} else {
  console.log("Menor de edad");
}

if (age >= 18) {
  console.log("Mayor de edad");
} else {
  console.log("Menor de edad");
}

/* 
  ifs anidados

  0-3 bebé
  4-10 infante
  11-17 adolescente
  18-30 joven
  31-59 adulto
  +60 adulto mayor
*/

if (age <= 3) {
  console.log("Bebé 👶🏻");
} else if (age >= 4 && age <= 10) {
  console.log("Infante 👧🏻👦🏻");
} else if (age >= 11 && age <= 17) {
  console.log("Adolescente 👩🏻‍🎤👨🏻‍🎤");
} else if (age >= 18 && age <= 30) {
  console.log("Jovén 👩🏻🧑🏻");
} else if (age >= 31 && age <= 59) {
  console.log("Adulto 👩🏻‍💼👨🏻‍💼");
} else {
  console.log("Adulto Mayor 🧓🏻👴🏻");
}

/*
Actividad
  Saludo
    0hrs - 5hrs: Déjame Dormir.
    6hrs - 11hrs: Buenos días.
    12hrs - 18hrs: Buenas tardes. 
    19hrs - 23hrs: Buenas noches.

  El Objeto Date permite obtener la información de la fecha y hora
  https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Date
*/

let fecha = new Date();
console.log(fecha);
let hora = fecha.getHours();
console.log(hora);

if (hora >= 0 && hora <= 5) {
  console.log(`Son las ${hora}hrs, déjame dormir 💤`);
} else if (hora >= 6 && hora <= 11) {
  console.log(`Son las ${hora}hrs, buenos dias 🖐`);
} else if (hora >= 12 && hora <= 18) {
  console.log(`Son las ${hora}hrs, buenas tardes 🍹`);
} else {
  console.log(`Son las ${hora}hrs, buenas noches 🎉`);
}

/*
  Los días de la semana en JS new Date().getDay()
   [
     "0 - Domingo",
     "1 - Lunes",
     "2 - Martes",
     "3 - Miércoles",
     "4- Jueves",
     "5 - Viernes",
     "6 - Sábado"
  ]
*/

let diaSemana = fecha.getDay();
console.log(diaSemana);

/* 
  == igual que, sólo compara valor
  === identico que, compara valor y tipo de dato
  != diferente que, sólo compara valor
  !== distinto que, compara valor y tipo de dato
*/
if (diaSemana === 0) {
  console.log("Domingo");
} else if (diaSemana === 1) {
  console.log("Lunes");
} else if (diaSemana === 2) {
  console.log("Martes");
} else if (diaSemana === 3) {
  console.log("Miércoles");
} else if (diaSemana === 4) {
  console.log("Jueves");
} else if (diaSemana === 5) {
  console.log("Viernes");
} else if (diaSemana === 6) {
  console.log("Sábado");
} else {
  console.log("Día no válido");
}

/* 
Switch - Case 

switch (variable) {
  case "valor1":
    sentencia1;
    sentencia2;
    break;
  case "valor2":
    sentencia1;
    sentencia2;
    break;
  case "valor3":
    sentencia1;
    sentencia2;
    break;
  default:
    sentencia1;
    sentencia2;
    break;
}
*/

switch (diaSemana) {
  case 0:
    console.log("Domingo");
    break;
  case 1:
    console.log("Lunes");
    break;
  case 2:
    console.log("Martes");
    break;
  case 3:
    console.log("Miércoles");
    break;
  case 4:
    console.log("Jueves");
    break;
  case 5:
    console.log("Viernes");
    break;
  case 6:
    console.log("Sábado");
    break;
  default:
    console.log("Día no válido");
    break;
}

/* 
Actividad
  Haz un switch case para imprimir el nombre del mes en el que estamos y una festividad
*/
let mes = fecha.getMonth();
console.log(mes);

switch (mes) {
  case 0:
    console.log("Enero");
    console.log("Feliz año nuevo 🎉");
    break;
  case 1:
    console.log("Febrero");
    console.log("San Valentín ❤️");
    break;
  case 2:
    console.log("Marzo");
    console.log("Primavera 🌸");
    break;
  case 3:
    console.log("Abril");
    console.log("Pascuas 🐰🐰");
    break;
  case 4:
    console.log("Mayo");
    console.log("Día de la madre 👩‍👧‍👦");
    break;
  case 5:
    console.log("Junio");
    console.log("Día del padre 👨‍👧‍👦");
    break;
  case 6:
    console.log("Julio");
    console.log("Verano 🌞");
    break;
  case 7:
    console.log("Agosto");
    console.log("Día de la cerveza 🍻");
    break;
  case 8:
    console.log("Septiembre");
    console.log("Otoño 🍁");
    break;
  case 9:
    console.log("Octubre");
    console.log("Halloween 🎃");
    break;
  case 10:
    console.log("Noviembre");
    console.log("Día de muertos 💀");
    break;
  case 11:
    console.log("Diciembre");
    console.log("Invierno ⛄");
    break;
  default:
    console.log("Mes Inválido 📅");
    break;
}

/* 
Operador Ternario:
  Es la simplificación de un if-else pero que se puede expresar en una línea de código, y que adicionalmente se puede almacenar en una variable;

  if (condición) {
    verdadera
  } else {
    falsa
  }
  
  Sintaxis:
  let variable = (condición) ? verdadera : falsa;
*/

function numeroParImpar(num) {
  let residuo = num % 2;
  //console.log(residuo);

  /* if (residuo === 0) {
    console.log(`El número ${num}, es PAR`);
  } else {
    console.log(`El número ${num}, es IMPAR`);
  } */

  let par = `El número ${num}, es PAR`;
  let impar = `El número ${num}, es IMPAR`;
  let ternario = residuo === 0 ? par : impar;
  console.log(ternario);
}

numeroParImpar(9);
numeroParImpar(8);

/* 
  Ciclos
    For
      es un ciclo que permite repetir un determinado código basado en que una condición se cumpla, en el momento en que la condición ya NO se cumple, entonces el ciclo termina.

      Cada vuelta de un ciclo se le llama iteración

      for tiene 3 partes
        1 - inicialización de la variable que controla el ciclo
        2 - condición a evaluar
        3 - incremento o decremento a la variable que controla el ciclo

      Sintaxis: 

      for (inicialización; condición; incremento o decremento) {
        bloque de
        sentencias que se
        ejecutan dentro
        del for
      }

    While
      antes del while hay que declarar la variable que lo controlará

      while (condición) {
        bloque de
        sentencias que se
        ejecutan dentro
        del while

        cómo última línea de código dentro del while hay que hacer el incremento o decremento de la variable que los controla
      } 

*/

for (let contador = 0; contador <= 10; contador++) {
  console.log(`Número ${contador}`);
}

for (let contador = 0; contador <= 10; contador += 2) {
  console.log(`Número ${contador}`);
}

for (let contador = 10; contador >= 0; contador--) {
  console.log(`Número ${contador}`);
}

for (let contador = 10; contador >= 0; contador -= 2) {
  console.log(`Número ${contador}`);
}

console.log(`While`);
let contadorWhile = 0;

while (contadorWhile <= 10) {
  console.log(`Número ${contadorWhile}`);
  contadorWhile++;
}

/* 
  Temporizadores
    setTimeout
      https://developer.mozilla.org/es/docs/Web/API/setTimeout
      -> Ejecuta una función después de cierto intervalo de tiempo
    setInterval
      https://developer.mozilla.org/es/docs/Web/API/setInterval
      -> Ejecuta cada determinado intervalo tiempo una función
*/

setTimeout(function () {
  console.log("Hola después de 2 segundos");
}, 2000);

setInterval(function () {
  console.log("Hola cada de 3 segundos");
}, 3000);
