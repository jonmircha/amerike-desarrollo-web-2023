async function obtenerDatosLocales() {
  let response = await fetch("js/data.json");
  console.log(response);
  let data = await response.json();
  console.log(data);

  let $info = document.querySelector("#info-personal");
  $info.innerHTML = `
    <h2>${data.nombre}</h2>
    <small>Tengo ${data.edad} años</small>
    <p>Mis pasatiempos son: ${data.pasatiempos}</p>
  `;

  let $pelis = document.querySelector("#peliculas");
  let pelisHTML = "";

  data.peliculas.forEach(function (el) {
    pelisHTML += `
      <div class="col-12 col-sm-6 col-md-4 col-lg-3">
        <div class="card" style="width: 18rem;">
          <img src="${el.poster}" class="card-img-top" alt="${el.nombre}">
          <div class="card-body">
            <h5 class="card-title">${el.nombre}</h5>
            <p class="card-text">${el.estreno}</p>
          </div>
        </div>
      </div>
    `;
  });

  $pelis.innerHTML = pelisHTML;
}

obtenerDatosLocales();

async function obtenerDatosGitHub() {
  let response = await fetch("https://api.github.com/users/jonmircha");
  let data = await response.json();

  console.log(data);

  let $github = document.querySelector("#info-github");
  $github.innerHTML = `
    <div class="card mb-3" style="max-width: 540px;">
      <div class="row g-0">
        <div class="col-md-4">
          <img src="${data.avatar_url}" class="img-fluid rounded-start" alt="${
    data.name
  }">
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">${data.name}</h5>
            <p class="card-text">${data.bio === null ? "Sin bio" : data.bio}</p>
            <p class="card-text"><small class="text-body-secondary">${
              data.location === null ? "Sin ubicación" : data.location
            }</small></p>
          </div>
        </div>
      </div>
    </div>
  `;
}

obtenerDatosGitHub();
