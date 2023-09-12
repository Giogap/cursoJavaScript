'esu strict'

/* 
Hacer un programa que nos diga cual numero es mayor,
menor o si son iguales
Plus: Si el dato no es numero o es <= 0, vuelva a 
pedir los datos
*/

var num1 = parseInt(prompt("ingresa num1", 0));
var num2 = parseInt(prompt("ingresa num2", 0));

while(num1 <= 0 || num2 <= 0 || isNaN(num1) || isNaN(num2)) {
    num1 = parseInt(prompt("ingresa num1", 0));
    num2 = parseInt(prompt("ingresa num2", 0));
}

if(num1 == num2) {
    alert("Los numeros son iguales");
} else if(num1 > num2) {
    alert("El numero mayor es " + num1);
    alert("El numero menor es " + num2);
} else if(num1 < num2) {
    alert("El numero mayor es " + num2);
    alert("El numero menor es " + num1);
}