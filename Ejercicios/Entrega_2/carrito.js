// ---------- Utilidades de cookies ----------
const NOMBRE_COOKIE = "carrito";

function guardarCookie(nombre, valor, dias) {
  const fecha = new Date();
  fecha.setTime(fecha.getTime() + dias * 24 * 60 * 60 * 1000);
  document.cookie =
    nombre + "=" + encodeURIComponent(valor) +
    "; expires=" + fecha.toUTCString() +
    "; path=/";
}

function leerCookie(nombre) {
  const pares = document.cookie.split("; ");
  for (const par of pares) {
    const [clave, valor] = par.split("=");
    if (clave === nombre) return decodeURIComponent(valor);
  }
  return null;
}

// ---------- Lógica del carrito ----------
function obtenerCarrito() {
  const contenido = leerCookie(NOMBRE_COOKIE);
  return contenido ? JSON.parse(contenido) : [];
}

function comprarProducto() {
  const cantidad = parseInt(document.getElementById("cantidad").value.trim(), 10);
  const descripcion = document.getElementById("descripcion").value.trim();

  if (isNaN(cantidad) || cantidad <= 0 || descripcion === "") {
    alert("Indica una cantidad válida (número mayor que 0) y una descripción.");
    return;
  }

  const carrito = obtenerCarrito();

  // Si el producto ya existe, se suma la cantidad
  const existente = carrito.find(
    (p) => p.descripcion.toLowerCase() === descripcion.toLowerCase()
  );
  if (existente) {
    existente.cantidad += cantidad;
  } else {
    carrito.push({ cantidad, descripcion });
  }

  guardarCookie(NOMBRE_COOKIE, JSON.stringify(carrito), 7);
  console.log("Añadido al carrito: " + cantidad + " " + descripcion);

  document.getElementById("cantidad").value = "";
  document.getElementById("descripcion").value = "";
  document.getElementById("cantidad").focus();
}

function verCarrito() {
  const carrito = obtenerCarrito();

  console.log("===== CARRITO DE LA COMPRA =====");
  if (carrito.length === 0) {
    console.log("El carrito está vacío.");
    return;
  }

  let total = 0;
  for (const producto of carrito) {
    console.log(producto.cantidad + " " + producto.descripcion);
    total += producto.cantidad;
  }
  console.log("--------------------------------");
  console.log("TOTAL de productos: " + total);
}
