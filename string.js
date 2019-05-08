// Las variables de JavaScript se crean de la misma forma 
// (Utilizan la palabra reservada var ), 
// la forma en la que se les asigna un valor depende del tipo de 
// valor que se quiere almacenar (números, textos, etc.)
// String: Un objeto que representa una serie de caracteres dentro de una cadena.

var nombre, apellido;

nombre = 'Pepito';
apellido = 'Rios';

console.log('Hola ' + nombre);
console.log('Nombre en mayuscula ' + nombre.toUpperCase());
console.log('Primera letra del nombre ' + nombre.charAt(1));
console.log('Cantidad de letras del nombre ' + nombre.length);
console.log('Nombre completo: ' + nombre + ' ' + apellido);
console.log(`Nombre completo: ${nombre} ${apellido.toUpperCase()}`);
console.log('Primeras 3 letras del nombre ' + nombre.substr(0, 3));