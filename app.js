
//Ejercicio 1 - Escribe un programa de una sola línea que haga que aparezca en la pantalla un alert que diga “Hello World”. (pantalla) 
alert ('Hello World');
 
// Ejercicio 2 - Escribe un programa de una sola línea que escriba en la pantalla un texto que diga “Hello World” (document.write).(pantalla)
const hola= document.write ('Hello World');

//Ejercicio 3 - Escribe un programa de una sola línea que escriba en la pantalla el resultado de sumar 3 + 5.(consola)
console.log (3+5); 8

// Ejercicio 4 - Escribe un programa de dos líneas que pida el nombre del usuario con un prompt y escriba un texto que diga “Hola nombreUsuario”(pantalla)
let nombreUsuario = prompt ('Escribe tu nombre');
let salidadepantalla = document.write (`Hola ${nombreUsuario}`);

//Ejercicio 5 - Escribe un programa de tres líneas que pida un número, pida otro número y escriba el resultado de sumar estos dos números.(consola)

let numero01 = parseInt(prompt('Escribe un numero'));
let numero02 = parseInt(prompt('Escribe un numero'));

console.log ('La suma de los numeros es:'numero01 + numero02)

//Ejercicio 6 - Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor.(consola)

var numero1 = parseFloat(prompt("Ingresa el primer número:"));
var numero2 = parseFloat(prompt("Ingresa el segundo número:"));

var mayor;

if (numero1 > numero2) {
    mayor = numero1;
} else {
    mayor = numero2;
}

console.log("El mayor número es: " + mayor);


//Ejercicio 7 - Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.(consola)
var num1 = parseFloat(prompt("Ingresa el primer número:"));
var num2 = parseFloat(prompt("Ingresa el segundo número:"));
var num3 = parseFloat(prompt("Ingresa el tercer número:"));

var mayor = num1; 

if (num2 > mayor) {
  mayor = num2;
}

if (num3 > mayor) {
  mayor = num3;
}

console.log("El número más grande es: " + mayor);


//Ejercicio - 8 Escribe un programa que pida un número y diga si es divisible por 2(consola)
var numero = parseInt(prompt("Ingresa un número:"));

if (numero % 2 === 0) {
  console.log("El número es divisible por 2.");
} else {
  console.log("El número no es divisible por 2.");
}


//Ejercicio - 9 Escribe un programa que pida una frase y escriba cuantas veces aparece la letra a(pantalla)

var frase = prompt("Ingresa una frase:");
frase = frase.toLowerCase();
var contador = 0;
for (var i = 0; i < frase.length; i++) {
  if (frase.charAt(i) === "a") {
    contador++;
  }
}
console.log("La letra 'a' aparece " + contador + " veces en la frase.")