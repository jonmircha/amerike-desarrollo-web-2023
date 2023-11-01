import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "https://www.gstatic.com/firebasejs/10.5.0/firebase-auth.js";

export function authEmail(app) {
  const d = document,
    auth = getAuth(app),
    $appAuthEmail = d.getElementById("app-auth-email");

  onAuthStateChanged(auth, (user) => {
    console.log(user);

    if (user) {
      //console.log("Usuario Autenticado");
      $appAuthEmail.innerHTML = `
        <p>Si ves este contenido es porque estás logueado</p>
        <button id="logout">Salir</button>
      `;
    } else {
      //console.log("Usuario NO Autenticado");
      $appAuthEmail.innerHTML = `<p>El contenido de esta sección es exclusivo para usuarios registrados</p>`;
    }
  });

  d.addEventListener("submit", (e) => {
    e.preventDefault();
    let $form = e.target;

    if ($form.matches("#form-signin")) {
      alert("Creando Cuenta");
      //console.log(form.nombre.value, form.email.value, form.pass.value);

      createUserWithEmailAndPassword(auth, $form.email.value, $form.pass.value)
        .then((res) => {
          console.log(res);
          $appAuthEmail.innerHTML = `<p>Usuario creado con el correo <b>${$form.email.value}</b></p>`;
          $form.reset();
        })
        .catch((err) => {
          console.log(err);
          $appAuthEmail.innerHTML = `<p>Ocurrio un error al crear la cuenta <b>${err.message}</b></p>`;
          $form.nombre.focus();
        });
    }

    if ($form.matches("#form-login")) {
      alert("Iniciando Sesión");

      signInWithEmailAndPassword(auth, $form.email.value, $form.pass.value)
        .then((res) => {
          //console.log(res);
          $appAuthEmail.innerHTML = `<p>Usuario logueado con el correo <b>${$form.email.value}</b></p>`;
          $form.reset();
        })
        .catch((err) => {
          //console.log(err);
          $appAuthEmail.innerHTML = `<p>Ocurrio un error al iniciar sesión <b>${err.message}</b></p>`;
          $form.pass.focus();
        });
    }
  });

  d.addEventListener("click", (e) => {
    if (e.target.matches("#logout")) {
      alert("Cerrando sesión");
      signOut(auth);
    }
  });
}
