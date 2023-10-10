export function sumar(a, b) {
  let c = a + b;
  return c;
}

export function sumar3(a, b, c) {
  let d = a + b + c;
  return d;
}

//Esta función será privada, como no tiene la palabra export, no es accesible
function sumar4(a, b, c, d) {
  return a + b + c + d;
}
