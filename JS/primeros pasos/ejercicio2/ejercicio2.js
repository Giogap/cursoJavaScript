'use strict'

/* 
utilizar un bucle, mostrar la suma y la media de
los numeros introducidos hasta hasta que un numero
sea negativo
*/

var sum = 0;
var cont = 0;

do {
    var num = parseInt(prompt("Ingresa numeros hasta que uno sea negativo", 0));
    if(isNaN(num)) {
        num = 0;
    } else if(num >= 0) {
        sum = sum + num;
        cont++;
    }
    console.log(sum);
    console.log(cont);    
} while(num >= 0)

alert("La Suma Es " + sum);
alert("La Media Es " + (sum/cont));