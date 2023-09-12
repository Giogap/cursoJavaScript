'use strict'

/*moostrar todos los numeros que hay entre dos numeros 
introducidos por el usuario */

var num1 = parseInt(prompt("introduce primer numero", 0));
var num2 = parseInt(prompt("introduce segundo numero", 0));
var i = num1 + 1;

document.write("<h1>De "+num1+" a "+num2+" Estan Estos Numeros</h1>")
for(i; i < num2; i++) {
    document.write(i);
}
