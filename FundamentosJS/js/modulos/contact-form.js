export function sendContactForm(email) {
  let $form = document.querySelector("#contact-form"),
    $inputs = document.querySelectorAll("#contact-form [required]");

  console.log($inputs);

  $inputs.forEach((el) => {
    let $small = document.createElement("small");
    $small.id = `${el.name}-error`;
    $small.innerText = el.title;
    $small.classList.add(
      "bg-danger",
      "text-white",
      "my-1",
      "p-3",
      "d-block",
      "d-none"
    );
    el.insertAdjacentElement("afterend", $small);
  });

  document.addEventListener("input", (e) => {
    if (!e.target.matches("#contact-form [required]")) {
      return false;
    }

    let $smallError = document.querySelector(`#${e.target.name}-error`);
    console.log($smallError);
    let condition;

    if (e.target.pattern) {
      let regex = new RegExp(e.target.pattern);
      console.log(e.target.pattern);
      condition = !regex.exec(e.target.value);
    } else {
      condition = e.target.value === "";
    }

    console.log(condition);
    return condition
      ? $smallError.classList.remove("d-none")
      : $smallError.classList.add("d-none");
  });

  $form.addEventListener("submit", async (e) => {
    e.preventDefault();
    alert("Enviando Formulario");
    //console.log(e);
    //console.log(e.target);

    let $loader = document.querySelector("#loader"),
      $message = document.querySelector("#form-message");

    $loader.classList.remove("d-none");

    try {
      let url = `http://formsubmit.co/ajax/${email}`;
      let options = {
        method: "POST",
        body: new FormData(e.target),
      };

      let res = await fetch(url, options);

      if (!res.ok) {
        throw "Hubo un error al enviar la información, intenta nuevamente";
      }

      let json = await res.json();
      console.log(json);

      e.target.reset();
      $loader.classList.add("d-none");
      $message.classList.remove("d-none");
      $message.innerHTML = `${
        json.success
          ? "El formulario se envío con éxito"
          : "Hubo un error al enviar la información, intenta nuevamente"
      }`;
      setTimeout(() => {
        $message.classList.add("d-none");
        $message.innerHTML = "";
      }, 3000);
    } catch (err) {
      console.error(err);
      $message.classList.remove("d-none");
      $message.innerHTML = `<p><b>${err}</b></p>`;
      setTimeout(() => {
        $message.classList.add("d-none");
        $message.innerHTML = "";
      }, 3000);
    }
  });
}
