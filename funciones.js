// Una función es una porción de código reusable que puede ser llamada en 
// cualquier momento desde nuestro programa

// Las funciones puede retornar o no un valor de cualquier tipo

var birthDate = '1991-01-01';

// Calcula la edad edad en años de una persona
// Recibe como parametro la fecha de nacimientos

function calculateAge(birthDate) {
    var currentDate = new Date().getTime();
    var birth = new Date(birthDate).getTime();
    var day = 1000 * 60 * 60 * 24;
    var diff = currentDate - birth;

    var days = Math.floor(diff / day);
    var months = Math.floor(days / 31);
    var years = Math.floor(months / 12);

    return years;
}

var edad = calculateAge(birthDate);

console.log('Edad:' + edad);