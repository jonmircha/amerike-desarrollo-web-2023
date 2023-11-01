import {
  getDatabase,
  ref,
  onValue,
  set,
  push,
  update,
  remove,
} from "https://www.gstatic.com/firebasejs/10.5.0/firebase-database.js";

export function firebaseCRUD(app) {
  const d = document,
    db = getDatabase(app),
    refCities = ref(db, "cities"),
    $table = d.getElementById("table-cities"),
    $form = d.getElementById("form-cities"),
    $fragment = d.createDocumentFragment(),
    $template = d.getElementById("template-city").content;

  function renderCities() {
    onValue(refCities, (snapshot) => {
      //limpiar el contenido de la tabla
      $table.querySelector("tbody").innerHTML = "";

      snapshot.forEach((el) => {
        //console.log(el);
        //console.log(el.key);
        //console.log(el.val());

        let values = el.val(),
          key = el.key;

        $template.querySelector(".key-id").id = key;
        $template.querySelector(".key").innerText = key;
        $template.querySelector(".country").innerText = values.country;
        $template.querySelector(".city").innerText = values.city;

        let $clone = d.importNode($template, true);
        $fragment.appendChild($clone);
      });

      $table.querySelector("tbody").appendChild($fragment);
    });
  }

  d.addEventListener("DOMContentLoaded", (e) => renderCities());

  $form.addEventListener("submit", (e) => {
    e.preventDefault();
    //alert("El form se procesa");
    //console.log($form.country.value, $form.city.value);

    let key = e.target.key,
      values = {
        country: $form.country.value,
        city: $form.city.value,
      };

    if (!key.value) {
      //Insertar
      push(ref(db, "cities"), values);
    } else {
      //Actualizar
      update(ref(db), {
        ["/cities/" + key.value]: values,
      });
    }

    $form.reset();
  });

  d.addEventListener("click", (e) => {
    if (!e.target.matches(".edit") && !e.target.matches(".delete"))
      return false;

    if (e.target.matches(".edit")) {
      //alert("Editar");
      //console.log(e.target.parentElement.parentElement.id);
      let $parent = e.target.parentElement.parentElement;
      $form.country.value = $parent.querySelector(".country").innerText;
      $form.city.value = $parent.querySelector(".city").innerText;
      $form.key.value = $parent.id;
    }

    if (e.target.matches(".delete")) {
      //alert("Eliminar");
      let key = e.target.parentElement.parentElement.id,
        deleteId = confirm(`¿Estás seguro de eliminar el id ${key}?`);

      if (deleteId) remove(ref(db, `/cities/${key}`));
    }
  });
}
