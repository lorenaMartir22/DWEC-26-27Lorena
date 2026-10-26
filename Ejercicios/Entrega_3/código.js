class Carta {
    constructor(numero = 1, palo = "c") {
        // Constructor de copia
        if (numero instanceof Carta) {
            this.numero = numero.numero;
            this.palo = numero.palo;
        } else {
            this.setNumero(numero);
            this.setPalo(palo);
        }
    }

    // Getters
    getNumero() {
        return this.numero;
    }

    getPalo() {
        return this.palo;
    }

    // Setters con validación
    setNumero(numero) {
        if (Number.isInteger(numero) && numero >= 1 && numero <= 13) {
            this.numero = numero;
        } else {
            throw new Error("El número debe estar entre 1 y 13.");
        }
    }

    setPalo(palo) {
        if (["c", "p", "r", "t"].includes(palo)) {
            this.palo = palo;
        } else {
            throw new Error("El palo debe ser c, p, r o t.");
        }
    }

    mostrarCarta() {
        const nombresNumeros = {
            1: "As",
            11: "Jack",
            12: "Reina",
            13: "Rey"
        };

        const nombresPalos = {
            c: "Corazones",
            p: "Picas",
            r: "Rombos",
            t: "Tréboles"
        };

        const numeroMostrar = nombresNumeros[this.numero] ?? this.numero;
        console.log(`Es el ${numeroMostrar} de ${nombresPalos[this.palo]}`);
    }

    comparar(carta) {
        let resultado;

        if (this.numero > carta.numero) {
            resultado = 1;
        } else if (this.numero < carta.numero) {
            resultado = -1;
        } else {
            const ordenPalos = { c: 1, p: 2, r: 3, t: 4 };

            if (ordenPalos[this.palo] > ordenPalos[carta.palo]) {
                resultado = 1;
            } else if (ordenPalos[this.palo] < ordenPalos[carta.palo]) {
                resultado = -1;
            } else {
                resultado = 0;
            }
        }

        if (resultado === 1) {
            console.log("Gana la carta actual:");
            this.mostrarCarta();
        } else if (resultado === -1) {
            console.log("Gana la carta recibida:");
            carta.mostrarCarta();
        } else {
            console.log("Empate:");
            this.mostrarCarta();
        }

        return resultado;
    }
}

// Ejemplos de uso
const carta1 = new Carta();          // Constructor por defecto
const carta2 = new Carta(7, "t");    // Constructor con valores
const carta3 = new Carta(carta2);    // Constructor de copia

console.log("Carta por defecto:");
carta1.mostrarCarta();

console.log("\nCarta 2:");
carta2.mostrarCarta();

console.log("\nCopia de la carta 2:");
carta3.mostrarCarta();

console.log("\nGetters de la carta 2:");
console.log("Número:", carta2.getNumero());
console.log("Palo:", carta2.getPalo());

console.log("\nModificamos la carta 2 con los setters:");
carta2.setNumero(12);
carta2.setPalo("r");
carta2.mostrarCarta();

console.log("\nComparamos la carta 2 con el 10 de picas:");
const carta4 = new Carta(10, "p");
console.log("Resultado:", carta2.comparar(carta4));

console.log("\nComparamos la Reina de rombos con la Reina de tréboles:");
const carta5 = new Carta(12, "t");
console.log("Resultado:", carta2.comparar(carta5));

console.log("\nComparamos dos Reinas de rombos:");
const carta6 = new Carta(12, "r");
console.log("Resultado:", carta2.comparar(carta6));
