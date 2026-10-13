// Ejercicio

var datos = [
    {
        nombre: "PEPE",
        apellidos: "LÓPEZ PÉREZ",
        telefono: "88889467",
        asignaturas: {
            nombre: "DWEC",
            codigo: "1111"
        }
    },
    {
        nombre: "ANA",
        apellidos: "GARCÍA GARCÍA",
        telefono: "666666666",
        asignaturas: {
            nombre: "DIW",
            codigo: "2222"
        }
    }
];

var profe = {}


// EJERCICIO 1
// Realiza un listado completo en consola de todos los
// profesores junto con la asignatura que imparte

for (let i = 0; i < datos.length; i++) {
    console.log(datos[i].nombre + " " +
                datos[i].apellidos + " - " +
                datos[i].asignaturas.nombre);
}

// EJERCICIO 2
//Dado un código de asignatura, mostrar el nombre y apellidos
// del profesor que la imparte

var codAsig = "1111";


// EJERCICIO 3
/*
Crear un formulario para dar de alta profesores introduciendo el DNI nombre apellidos y teléfono
del mismo

Más abajo añadir otro formulario para añadir asignaturas a un profesor
indicando código de la asignatura nombre de la asignatura y DNI del profesor que la imparte

Añadir un tercer y último formulario donde introduciendo el código de la asignatura
me indique el profesor que imparte esa asignatura

Posdata todos los datos que se muestran se mostrarán por consola
*/


