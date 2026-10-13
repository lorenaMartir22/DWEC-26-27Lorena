// Constructor del objeto Tiempo
function Tiempo(anio, mes, dia, hora, minuto, segundo) {

    // Si todos los parámetros son 0, usamos la fecha actual
    if (anio === 0 && mes === 0 && dia === 0 &&
        hora === 0 && minuto === 0 && segundo === 0) {

        let fechaActual = new Date();

        this.anio = fechaActual.getFullYear();
        this.mes = fechaActual.getMonth() + 1;
        this.dia = fechaActual.getDate();
        this.hora = fechaActual.getHours();
        this.minuto = fechaActual.getMinutes();
        this.segundo = fechaActual.getSeconds();

    } else {
        this.anio = anio;
        this.mes = mes;
        this.dia = dia;
        this.hora = hora;
        this.minuto = minuto;
        this.segundo = segundo;
    }
}

// GETTERS
Tiempo.prototype.getAnio = function () {
    return this.anio;
};

Tiempo.prototype.getMes = function () {
    return this.mes;
};

Tiempo.prototype.getDia = function () {
    return this.dia;
};

Tiempo.prototype.getHora = function () {
    return this.hora;
};

Tiempo.prototype.getMinuto = function () {
    return this.minuto;
};

Tiempo.prototype.getSegundo = function () {
    return this.segundo;
};

// SETTERS
Tiempo.prototype.setAnio = function (anio) {
    this.anio = anio;
};

Tiempo.prototype.setMes = function (mes) {
    this.mes = mes;
};

Tiempo.prototype.setDia = function (dia) {
    this.dia = dia;
};

Tiempo.prototype.setHora = function (hora) {
    this.hora = hora;
};

Tiempo.prototype.setMinuto = function (minuto) {
    this.minuto = minuto;
};

Tiempo.prototype.setSegundo = function (segundo) {
    this.segundo = segundo;
};

// Devuelve dd/mm/aaaa
Tiempo.prototype.getFechaCompleta = function () {
    let dia = String(this.dia).padStart(2, "0");
    let mes = String(this.mes).padStart(2, "0");

    return dia + "/" + mes + "/" + this.anio;
};

// Devuelve hh:mm:ss
Tiempo.prototype.getHoraCompleta = function () {
    let hora = String(this.hora).padStart(2, "0");
    let minuto = String(this.minuto).padStart(2, "0");
    let segundo = String(this.segundo).padStart(2, "0");

    return hora + ":" + minuto + ":" + segundo;
};

// Comprueba si el año es bisiesto
Tiempo.prototype.esBisiesto = function () {
    return (this.anio % 4 === 0 && this.anio % 100 !== 0)
        || this.anio % 400 === 0;
};

// Comprueba si es mayor que otroTiempo
Tiempo.prototype.esMayor = function (otroTiempo) {
    let fecha1 = new Date(
        this.anio, this.mes - 1, this.dia,
        this.hora, this.minuto, this.segundo
    );

    let fecha2 = new Date(
        otroTiempo.anio, otroTiempo.mes - 1, otroTiempo.dia,
        otroTiempo.hora, otroTiempo.minuto, otroTiempo.segundo
    );

    return fecha1.getTime() > fecha2.getTime();
};

// Comprueba si es menor que otroTiempo
Tiempo.prototype.esMenor = function (otroTiempo) {
    let fecha1 = new Date(
        this.anio, this.mes - 1, this.dia,
        this.hora, this.minuto, this.segundo
    );

    let fecha2 = new Date(
        otroTiempo.anio, otroTiempo.mes - 1, otroTiempo.dia,
        otroTiempo.hora, otroTiempo.minuto, otroTiempo.segundo
    );

    return fecha1.getTime() < fecha2.getTime();
};

// Comprueba si es igual a otroTiempo
Tiempo.prototype.esIgual = function (otroTiempo) {
    return this.anio === otroTiempo.anio &&
        this.mes === otroTiempo.mes &&
        this.dia === otroTiempo.dia &&
        this.hora === otroTiempo.hora &&
        this.minuto === otroTiempo.minuto &&
        this.segundo === otroTiempo.segundo;
};

// Suma la hora de otroTiempo
Tiempo.prototype.sumaHora = function (otroTiempo) {
    let fecha = new Date(
        this.anio, this.mes - 1, this.dia,
        this.hora, this.minuto, this.segundo
    );

    fecha.setHours(
        fecha.getHours() + otroTiempo.hora,
        fecha.getMinutes() + otroTiempo.minuto,
        fecha.getSeconds() + otroTiempo.segundo
    );

    this.anio = fecha.getFullYear();
    this.mes = fecha.getMonth() + 1;
    this.dia = fecha.getDate();
    this.hora = fecha.getHours();
    this.minuto = fecha.getMinutes();
    this.segundo = fecha.getSeconds();
};

// =====================================
// EJEMPLOS DE USO POR CONSOLA
// =====================================

let tiempo1 = new Tiempo(2024, 5, 10, 14, 30, 20);
let tiempo2 = new Tiempo(2025, 8, 15, 10, 20, 30);
let tiempo3 = new Tiempo(2024, 5, 10, 14, 30, 20);

// Objeto con fecha y hora actuales
let tiempoActual = new Tiempo(0, 0, 0, 0, 0, 0);

console.log("=== GETTERS ===");
console.log("Año:", tiempo1.getAnio());
console.log("Mes:", tiempo1.getMes());
console.log("Día:", tiempo1.getDia());
console.log("Hora:", tiempo1.getHora());
console.log("Minuto:", tiempo1.getMinuto());
console.log("Segundo:", tiempo1.getSegundo());

console.log("Fecha completa:", tiempo1.getFechaCompleta());
console.log("Hora completa:", tiempo1.getHoraCompleta());

console.log("\n=== SETTERS ===");
tiempo1.setHora(16);
console.log("Nueva hora:", tiempo1.getHoraCompleta());

// Restauramos la hora para continuar los ejemplos
tiempo1.setHora(14);

console.log("\n=== AÑO BISIESTO ===");
console.log("¿2024 es bisiesto?", tiempo1.esBisiesto());

console.log("\n=== COMPARACIONES ===");
console.log("¿Tiempo 2 es mayor que tiempo 1?",
    tiempo2.esMayor(tiempo1));

console.log("¿Tiempo 1 es menor que tiempo 2?",
    tiempo1.esMenor(tiempo2));

console.log("¿Tiempo 1 es igual que tiempo 3?",
    tiempo1.esIgual(tiempo3));

console.log("\n=== SUMA DE HORAS ===");
let tiempo4 = new Tiempo(2024, 5, 10, 14, 30, 20);
let duracion = new Tiempo(0, 0, 0, 2, 45, 50);

console.log("Tiempo inicial:", tiempo4.getFechaCompleta(),
    tiempo4.getHoraCompleta());

console.log("Duración a sumar:", duracion.getHoraCompleta());

tiempo4.sumaHora(duracion);

console.log("Resultado:", tiempo4.getFechaCompleta(),
    tiempo4.getHoraCompleta());

console.log("\n=== FECHA ACTUAL ===");
console.log("Fecha:", tiempoActual.getFechaCompleta());
console.log("Hora:", tiempoActual.getHoraCompleta());
