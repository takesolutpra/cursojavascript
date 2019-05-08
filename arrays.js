// Los arrays son estructuras que nos permiten organizar elementos dentro 
// de una collección. Estos elementos pueden ser números, strings, booleanos, 
// objetos, etc.

var sacha = {
    name: 'Sacha',
    apellido: 'Lifszyc',
    altura: 1.72
}

var alan = {
    name: 'Alan',
    apellido: 'Perez',
    altura: 1.86
}

var martin = {
    name: 'Martin',
    apellido: 'Gomez',
    altura: 1.85
}

var dario = {
    name: 'Dario',
    apellido: 'Juarez',
    altura: 1.71
}

var vicky = {
    name: 'Vicky',
    apellido: 'Zapata',
    altura: 1.56
}

var paula = {
    name: 'Paula',
    apellido: 'Barros',
    altura: 1.76
}

var personas = [sacha, alan, martin, dario, vicky, paula]

console.log('Personas: ', personas);
console.log('Persona 1', personas[0]);

//.length indica la longitud del array

//Recorre el onjero personas
for (var i = 0; i < personas.length; i++) {
    var persona = personas[i];

    console.log(`${persona.name} mide ${persona.altura}`);
}

// Filtra las personas con una altura mayor a 1.8
const personsFilter = persona => persona.altura > 1.8;

// El método filter () crea una nueva matriz con todos los elementos que 
// pasan la prueba implementada por la función proporcionada.

var personasAltas = personas.filter(personsFilter);

console.log('Personas altas: ', personasAltas);

var personasAltas2 = personas.filter((persona) => persona.altura > 1.8);

console.log('Personas altas 2: ', personasAltas2);

console.table(personasAltas2);

const pararAlturaCms = persona => {
    //    persona.altura *= 100;
    //    return persona;

    return {
        ...persona,
        altura: persona.altura * 100
    }
}

console.table(personas);
var personaCms = personas.map(pararAlturaCms);
console.table(personaCms);
console.table(personas);


// El método reduce() nos permite reducir, mediante una función que se
// aplica a cada uno de los elemento del array, todos los elementos de dicho array, 
// a un valor único.

//Calcular la suma total de las alturas

const reducer = (acum, persona) => {
    return acum + persona.altura;
}

var totalAltura = personas.reduce(reducer, 0);

console.log('Total altura ', totalAltura);