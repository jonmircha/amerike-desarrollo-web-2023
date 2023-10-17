export function themesColors() {
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

    let $themeCSS = document.querySelector("#theme");
    $themeCSS.href = e.target.dataset.theme;
    alert(`Has cambiado al tema ${e.target.dataset.name}`);
  });
}
