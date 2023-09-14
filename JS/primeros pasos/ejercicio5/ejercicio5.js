'use strict'

/* Muestre todos los numeros divisores
de un numero introducido en prompt */

var num = parseInt(prompt("ingresa un numero"));

for(var i = 1; i <= num; i++) {
    if(num % i == 0) {
        console.log("Divisor "+ i);
    }    
}