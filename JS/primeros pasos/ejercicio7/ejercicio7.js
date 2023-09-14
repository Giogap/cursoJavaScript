'use strict'

/* Tabla de multiplicar de un numero introducido 
por pantalla */

var num = parseInt(prompt("Tabla de multiplicar de", 1));

for(var i = 1; i <= 10; i++) {
    document.write(i +"x"+ num +"="+ (i*num) +"<br/>");
}