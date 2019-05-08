const MAYORIA_EDAD = 18;

var person = {
    name: 'Pepito',
    birthDate: '1990-01-01',
    age: 0
}


function calculateAge(p) {
    var currentDate = new Date().getTime();
    var birth = new Date(p.birthDate).getTime();
    var day = 1000 * 60 * 60 * 24;
    var diff = currentDate - birth;

    var days = Math.floor(diff / day);
    var months = Math.floor(days / 31);
    var years = Math.floor(months / 12);

    p.age = years;
}

var esMayorEdad = function(p) {
    return p.age > MAYORIA_EDAD;
}

var esMayorEdadArrow = (p) => {
    return p.age > MAYORIA_EDAD;
}

var esMayorEdadArrowDesestructurado = ({ age }) => age > MAYORIA_EDAD;

calculateAge(person);
console.log(person);
console.log(esMayorEdad(person));
console.log(esMayorEdadArrow(person));
console.log(esMayorEdadArrowDesestructurado(person));

if (esMayorEdadArrowDesestructurado) {
    console.log(person.name + ' es mayor de edad');
}