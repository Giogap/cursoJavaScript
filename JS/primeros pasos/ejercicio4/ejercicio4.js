'use strict'

/* Cuadro. mustrar los numeros impares entre dos numeros
introducidos por el usuario */

var num1 = parseInt(prompt("introduce primer numero", 0));
var num2 = parseInt(prompt("introduce segundo numero", 0));

while(num1 < num2) {
    num1 ++;

    if(num1 % 2 != 0) {
        console.log(num1+" Es Impar");
    }
}