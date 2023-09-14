'use strict'

/* Calculadora que pida dos numeros por pantalla
validar si es un numero, mostrar en pagina*/

var num1 = parseInt(prompt("ingrese primer numero"));
var num2 = parseInt(prompt("ingrese segundo numero"));

while(num1 < 0 || num2 < 0 || isNaN(num1) || isNaN(num2)) {
    num1 = parseInt(prompt("ingrese primer numero"));
    num2 = parseInt(prompt("ingrese segundo numero"));
}

var resultado = "la suma es: "+(num1+num2)+" <br/>"+
                "la resta es: "+(num1-num2)+" <br/>"+
                "la multiplicacion es: "+(num1*num2)+" <br/>"+
                "la division es: "+(num1/num2)+" <br/>";

var resultadoa = "la suma es: "+(num1+num2)+" \n"+
                "la resta es: "+(num1-num2)+" \n"+
                "la multiplicacion es: "+(num1*num2)+" \n"+
                "la division es: "+(num1/num2)+" \n";

document.write(resultado);
alert(resultadoa);
console.log(resultadoa);