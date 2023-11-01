import {
  getAuth,
  onAuthStateChanged,
  signOut,
  GithubAuthProvider,
  signInWithPopup,
} from "https://www.gstatic.com/firebasejs/10.5.0/firebase-auth.js";

export function authGitHub(app) {
  /*
    Ir al Settings de Github
    luego Developer Settings
    luego New OAuthApp
  */

  const d = document,
    auth = getAuth(app),
    provider = new GithubAuthProvider(),
    $appAuthGitHub = d.getElementById("app-auth-github");

  onAuthStateChanged(auth, (user) => {
    //console.log(user);

    if (user) {
      //console.log("Usuario Autenticado");
      $appAuthGitHub.innerHTML = `
        <p>Si ves este contenido es porque estas logueado</p>
        <button id="github-logout">Salir</button>
        <p>Bienvenido ${user.displayName}</p>
        <img src="${user.photoURL}" alt="${user.displayName}">
      `;
    } else {
      //console.log("Usuario NO Autenticado");
      $appAuthGitHub.innerHTML = `<p>El contenido de esta sección es exclusivo para usuarios registrados</p>`;
    }
  });

  d.addEventListener("click", (e) => {
    if (e.target.matches("#github-login")) {
      alert("Ingresando con GitHub");

      signInWithPopup(auth, provider)
        .then((res) => {
          //console.log(res);
          $appAuthGitHub.innerHTML = `<p>Bienvenido ${res.user.displayName}</p>`;
        })
        .catch((err) => {
          //console.log(err);
          $appAuthGitHub.innerHTML = `<p>Error: <i>${err.code}</i> - <b>${err.message}</b></p>`;
        });
    }

    if (e.target.matches("#github-logout")) {
      alert("Cerrando sesión");
      signOut(auth);
    }
  });
}
