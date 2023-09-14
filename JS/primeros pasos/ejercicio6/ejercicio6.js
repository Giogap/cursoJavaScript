'use strict'

/* Numero Par o Impar
1. Ventana prompt
2. Si no es valido pedir el numero de nuevo */

var num = parseInt(prompt("introduce un numero", 0));

while(isNaN(num)) {
    num = parseInt(prompt("introduce un numero", 0));
}

if(num % 2 == 0) {
    console.log("es un numero par "+ num);
} else {
    console.log("es impar "+ num);
}