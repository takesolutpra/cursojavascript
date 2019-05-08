// Los objetos se definen delimitados mediante llaves { }

// Un atributo se compone de una clave (key) y un valor (value), 
// que se separan entre sí por dos puntos “”:"". 
// Los valores pueden ser de tipo string, número, booleano, etc. 
// Cada atributo está separado del siguiente por una coma. 
// Un objeto puede tener todos los atributos que sean necesarios.

// Escribir el nombre de un objeto separado por un punto del nombre de un atributo, 
// nos permite acceder al valor de dicho atributo para ese objeto. 
// Un objeto también se puede pasar como atributo en una función.

// JSON: JavaString Object Notation

var person = {
    name: 'Pepito',
    birthDate: '1990-01-01'
}

// Funcion calcular edad recibe como parametro un objeto

function calculateAge(p) {
    var currentDate = new Date().getTime();
    var birth = new Date(p.birthDate).getTime();
    var day = 1000 * 60 * 60 * 24;
    var diff = currentDate - birth;

    var days = Math.floor(diff / day);
    var months = Math.floor(days / 31);
    var years = Math.floor(months / 12);

    console.log(p.name + ' tiene ' + years + ' años');
}

// Actualiza el nombre de la persona a Camilo
function updateName(person) {
    person.name = 'Camilo';
}

// Se llama a la funcion pasando como parametro un objeto en una variable
calculateAge(person);

// Se llama a la funcion pasando como parametro un objeto directamente
calculateAge({ name: 'Mario', birthDate: '2000-01-01' });

// Los objetos se pasan como valores por referencia
updateName(person);

// El resultado debe mostrar el objeto person con el nombre actualizado
console.log(person);