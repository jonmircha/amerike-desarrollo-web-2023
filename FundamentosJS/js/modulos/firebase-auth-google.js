import {
  getAuth,
  onAuthStateChanged,
  signOut,
  signInWithPopup,
  GoogleAuthProvider,
} from "https://www.gstatic.com/firebasejs/10.5.0/firebase-auth.js";

export function authGoogle(app) {
  const d = document,
    auth = getAuth(app),
    provider = new GoogleAuthProvider(),
    $appAuthGoogle = d.getElementById("app-auth-google");

  onAuthStateChanged(auth, (user) => {
    //console.log(user);

    if (user) {
      //console.log("Usuario Autenticado");
      $appAuthGoogle.innerHTML = `
        <p>Si ves este contenido es porque estas logueado</p>
        <button id="google-logout">Salir</button>
        <p>Bienvenido ${user.displayName}</p>
        <img src="${user.photoURL}" alt="${user.displayName}">
      `;
    } else {
      //console.log("Usuario NO Autenticado");
      $appAuthGoogle.innerHTML = `<p>El contenido de esta sección es exclusivo para usuarios registrados</p>`;
    }
  });

  d.addEventListener("click", (e) => {
    if (e.target.matches("#google-login")) {
      alert("Ingresando con Google");

      signInWithPopup(auth, provider)
        .then((res) => {
          console.log(res);
          $appAuthGoogle.innerHTML = `<p>Bienvenido ${res.user.displayName}</p>`;
        })
        .catch((err) => {
          console.log(err);
          $appAuthGoogle.innerHTML = `<p>Error: <i>${err.code}</i> - <b>${err.message}</b></p>`;
        });
    }

    if (e.target.matches("#google-logout")) {
      alert("Cerrando sesión");
      signOut(auth);
    }
  });
}
