// Constructor
function Cuenta(nombre, numero, saldo, interes){
    this.nombre = nombre;
    this.numero = numero;
    this.saldo = saldo;
    this.interes = interes;
}


// Getters

function getNombre(){
    return this.nombre;
}

function getSaldo(){
    return this.saldo;
}


// Ingreso

function ingreso(cantidad){
    if(cantidad > 0){
        this.saldo += cantidad;
    }
}


// Reintegro

function reintegro(cantidad){
    if(this.getSaldo() >= cantidad && cantidad > 0){
        this.saldo -= cantidad;
    }
}


// Transferencia

function transferencia(cuentaDestino, importe){
    if(importe > 0 && this.getSaldo() >= importe){
        this.reintegro(importe);
        cuentaDestino.ingreso(importe);
    }
}


// Crear banco

var banco = [];


// Añadir cuentas con push

banco.push(new Cuenta("Pepillo el de los Palotes", "111-11", 1000.00, 0.01));
banco.push(new Cuenta("Lola Flores", "222-22", 2000.00, 0.02));
banco.push(new Cuenta("Juan García", "333-33", 1500.00, 0.015));
banco.push(new Cuenta("María López", "444-44", 3000.00, 0.025));
banco.push(new Cuenta("Carlos Pérez", "555-55", 2500.00, 0.02));


// Asignar métodos

for(var i = 0; i < banco.length; i++){
    banco[i].getNombre = getNombre;
    banco[i].getSaldo = getSaldo;
    banco[i].ingreso = ingreso;
    banco[i].reintegro = reintegro;
    banco[i].transferencia = transferencia;
}


// Mostrar las cuentas

for(var i = 0; i < banco.length; i++){
    console.log(
        banco[i].getNombre() + 
        " - Saldo: " + 
        banco[i].getSaldo() + "€"
    );
}


// Buscar la cuenta con más dinero

var mayor = banco[0];

for(var i = 1; i < banco.length; i++){
    if(banco[i].getSaldo() > mayor.getSaldo()){
        mayor = banco[i];
    }
}

console.log("La cuenta con más dinero es:");
console.log(mayor.getNombre() + " - " + mayor.getSaldo() + "€");