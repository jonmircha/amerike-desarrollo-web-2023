/* 
DOM: Document Object Model.

El Modelo de Objetos del Documento es un API para documentos HTML y XML.

Éste proveé una representación estructural del documento, permitiendo modificar su contenido y presentación visual mediante código JavaScript.

El DOM no es parte de la especificación de JavaScript, es una API para los navegadores.

Teoría DOM: https://jonmircha.com/dom
Documentación en MDN: https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model

El DOM tiene 3 objetos importantes:
  1) window: hace referencia a toda la ventana del navegador.
  2) document: hace refencia a la estructura del documento HTML.
  3) navigator: hace referencia a la información que se puede obtener del navegador del usuario, por ejemplo: geolocalización, estado de conexión, tipo de navegador, sistema operativo, etc.
  
*/

console.log(window);
console.log(document);
console.log(navigator);

let $logo = document.querySelector("#logo");
console.log($logo);

let $p = document.querySelector("p");
console.log($p);

let $parrafos = document.querySelectorAll("p");
console.log($parrafos);

let $links = document.querySelectorAll(".link");
console.log($links);

let $cajasTexto = document.querySelectorAll("input[type='text']");
console.log($cajasTexto);

console.log($logo.style);
$logo.style.backgroundColor = "#0f0";
$logo.style.padding = "2rem";

$logo.innerText = "<i>Logotipo</i>";
$logo.innerHTML = "<i>Logotipo</i>";

$links[2].innerHTML = "jonmircha.com";
$links[2].href = "https://jonmircha.com";
$links[2].target = "_blank";

//Cuando quieran afectar a varios elementos usaremos un forEach

$parrafos.forEach(function (el, index) {
  console.log(el, index);
  el.style.padding = "1rem";
  el.style.fontFamily = "Courier New";
  el.innerHTML = `
  <h3>Párrafo ${index}</h3>
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis dolore
  eligendi alias eius doloremque itaque iste ipsam, quasi sint maxime
  culpa perspiciatis labore at deserunt optio sunt totam assumenda est?
  `;
});

let nombre = "Jon";
let $nombre = document.querySelector("#nombre");

$nombre.innerHTML = `<b>${nombre}</b>`;

let $foto = document.createElement("img");
$foto.src = "https://jonmircha.com/img/jonmircha-hola.jpg";
$foto.style.maxWidth = "100%";

document.body.appendChild($foto);

console.log($parrafos[1].classList);
