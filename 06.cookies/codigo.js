//FUNCION PARA CREAR LA COOKIE
function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  let expires = "expires="+ d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
//FUNCION PARA LEER LA COOKIE
function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i <ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}


//creamos la cookie
setCookie("comida","manzanas",7);

//leemos la cookie
console.log("El valor de comida es: " + getCookie("comida"));

setCookie("comida","churros",7);
var valor = getCookie("comida");
console.log("El valor de comida es: " + valor);

//Otra cookie
var deportes = ["futbol", "baloncesto", "tenis"];
setCookie("deportes", deportes,30);

var valor = getCookie("deportes");
console.log(valor[0]);
valor[0] = "badminton";
setCookie("deportes", valor, 30);
console.log(valor[0]);