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

/* 
Eventos

La formula de la sintaxis de los eventos es:

elemento.addEventListener("tipodelevento", nombreDeFuncion);

elemento.addEventListener("tipodelevento", function (e) {
  código
  de la
  función
});

elemento.addEventListener("tipodelevento", (e) => {
  código
  de la
  función
});

Una función que se asigna a un evento se le conoce como MANEJADOR DEL EVENTO (Event Handler).

Una función que maneja el evento, SÓLO PUEDE RECIBIR COMO PÁRAMETRO al evento mismo.


Lista de Eventos en JavaScript: https://developer.mozilla.org/es/docs/Web/Events 
*/

function saludar(e) {
  alert("Hola Mundo");
  console.log(e);
  e.target.style.backgroundColor = "black";
  e.target.style.color = "white";
  e.target.innerText = " Me has presionado 😎👍🏻";
}

$btnPush2 = document.querySelector("#btn-push-2");

$btnPush2.addEventListener("click", saludar);

$pPush3 = document.querySelector("#p-push-3");

$pPush3.addEventListener("dblclick", function (e) {
  alert(
    `Has presionado el párrafo, el tipo de evento que desencadenaste es ${e.type}`
  );

  e.target.style.backgroundColor = "skyblue";
  e.target.style.color = "white";
  e.target.style.fontWeight = "bold";
  e.target.innerText = "Has presionado este párrafo 2 veces ✌🏻✌🏻";
  console.log(e);
});

function networkStatus() {
  const $div = document.createElement("div");

  if (navigator.onLine) {
    $div.classList.add("online");
    $div.classList.remove("offline");
    $div.innerHTML = "<b>Conexión Reestablecida</b>";
  } else {
    $div.classList.add("offline");
    $div.classList.remove("online");
    $div.innerHTML = "<b>Conexión Perdida</b>";
  }

  document.body.appendChild($div);

  setTimeout(function () {
    document.body.removeChild($div);
  }, 3000);
}

window.addEventListener("online", networkStatus);
window.addEventListener("offline", networkStatus);

$btnTheme = document.querySelector("#btn-theme");

//Arrow functions
$btnTheme.addEventListener("click", (e) => {
  if (document.body.classList.contains("dark-mode")) {
    document.body.classList.remove("dark-mode");
    e.target.innerText = "🌙";
  } else {
    document.body.classList.add("dark-mode");
    e.target.innerText = "☀️";
  }
});

document.addEventListener("keydown", (e) => {
  console.log(e);
  console.log(e.type);
  console.log(e.key);
  console.log(e.code);
  console.log(`ctrl: ${e.ctrlKey}`);
  console.log(`alt: ${e.altKey}`);
  console.log(`shift: ${e.shiftKey}`);

  if (e.key === "a" && e.ctrlKey) {
    alert("Haz lanzado una alerta con el atajo ctrl + a");
  }
  if (e.key === "c" && e.ctrlKey) {
    confirm("Haz lanzado una confirmación con el atajo ctrl + c");
  }
  if (e.key === "p" && e.ctrlKey) {
    prompt("Haz lanzado una aviso con el atajo ctrl + p");
  }
});

let $radioThemes = document.querySelectorAll("input[name='theme']");
console.log($radioThemes);

/* 
Esto no es óptimo
$radioThemes.forEach((el) => {
  el.addEventListener("click", (e) => {
    console.log(e);
  });
}); */

/*
DELEGACIÓN DE EVENTOS
https://www.youtube.com/watch?v=j2fWSgOrxRs&list=PLvq-jIkSeTUZ6QgYYO3MwG9EMqC-KoLXA
*/

document.addEventListener("click", (e) => {
  if (!e.target.matches(`input[name = "theme"]`)) {
    return false;
  }

  console.log(e);
  console.log(e.target.matches(`input[name = "theme"]`));
  console.log(e.target.dataset);
  console.log(e.target.dataset.name);
  console.log(e.target.dataset.theme);

  $themeCSS = document.querySelector("#theme");
  $themeCSS.href = e.target.dataset.theme;
  alert(`Has cambiado al tema ${e.target.dataset.name}`);
});
