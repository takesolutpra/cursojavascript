//Numeros 

// El objeto Number es un objeto envolvente que permite trabajar con valores numéricos. 
// Un objeto Number se crea utilizando el constructor Number() . 
// Un objeto número de tipo primitivo se crea utilizando la función Number().

//Fechas:

// Permite trabajar con fechas y horas.

// El metodo getTime: Devuelve el valor numérico correspondiente a la hora para 
// la fecha especificada según la hora universal.

// El valor devuelto por el metodo getTime() es un numero de milisegundos 
// desde el 1 de enero de 1970 00:00:00 UTC.

// En general los valores numericos se tratan como en los demas lenguajes de
// programación

// En este ejercicio utilizaremos ca conversion de fechas a numeros para hacer
// algunas operaciones básicas

var fechaInicio = new Date('2016-07-12').getTime();
var fechaFin = new Date('2018-08-01').getTime();

// La siguiente operación calcula el valor de un día
// 1000 milisegudos 60 segundos se minutos 24 horas
var day = 1000 * 60 * 60 * 24;
var diff = fechaFin - fechaInicio;

var days = Math.floor(diff / day);
var months = Math.floor(days / 31);
var years = Math.floor(months / 12);

console.log('Fecha de inicio como numero: ' + fechaInicio);
console.log('Fecha de fin como numero: ' + fechaFin);
console.log('Dias entre fechas: ' + days);
console.log('Meses entre fechas: ' + months);
console.log('Años entre fechas: ' + years);

//Redondeo de numeros
// La función Math.round() retorna el valor de un número redondeado al entero más cercano.

var totalPrice = 1000;
var units = 33;
var unitValue = totalPrice / units;

console.log('Valor unitario:' + unitValue)
console.log('Valor unitario redondeado:' + Math.round(totalPrice / units));
console.log('Valor unitario con decimales: ' + unitValue.toFixed(2));


// Se puede utiliza la funcion Math.ceil() para redondear un numero hacia arriba

// La función Math.ceil() devuelve el entero más pequeño mayor o igual a un número dado.
console.log(Math.ceil(.95));
// Salida: 1

console.log(Math.ceil(4));
// Salida: 4

console.log(Math.ceil(7.004));
// Salida: 8

console.log(Math.ceil(-7.004));
// Salida: -7