// let y var
// var es una variable global
//

var numero = 40;

if (true) {
    var numero = 50;
    console.log(numero); // valor 50
}

console.log(numero); // valor 50

// prueba con let 

var texto = "prueba variables";

if (true) {
    let texto = "prueba 2";
    console.log(texto); // prueba 2
}

console.log(texto); // prueba variables



