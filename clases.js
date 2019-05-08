// Las clases son funciones cuya sintaxis tiene dos componentes:

// expresiones
// declaraciones
// En esta clase veremos el uso de this. Dentro de una función, el valor de 
// this depende de cómo es llamada ésta.

// Hablar de objetos en javascript es hablar de prototipos.
// La palabra reservada new se utiliza para crear un nuevo objeto con el 
// prototipo indicado.

// Ejemplo de una funcion, mas adelante se escribirá la misma funcion utilizando
// Una nomenclatura de clases

function Person(name, lastName, heigth) {
    this.name = name;
    this.lastName = lastName;
    this.heigth = heigth;
}

// Ejemplo de prototipos aunque no lo vamos a usar en el curso

Person.prototype.getFullName = function() {
    return `${this.name} ${this.lastName}`;
}

Person.prototype.getAlto = function() {
    return this.heigth > 1.70;
}

var persona1 = new Person('Carlos', 'Diaz', 1.75);

console.log('Persona1', persona1);
console.log('Persona1 nombre completo', persona1.getFullName());

console.log('Es alto', persona1.getAlto());

// Las clases de javascript, introducidas en ECMAScript 2015, son una mejora 
// sintáctica sobre la herencia basada en prototipos de JavaScript. 
// La sintaxis de las clases no introduce un nuevo modelo de herencia orientada a 
// objetos en JavaScript. Las clases de JavaScript proveen una sintaxis mucho más 
// clara y simple para crear objetos y lidiar con la herencia.
// Usando clases, una clase en realidad es un prototipos

// Metodos: 
// Una clase se compone de diversos métodos internos que permiten desde asignar 
// valores iniciales hasta estructurar su contenido creando relaciones de dependencias.
// Los metodos son procedimientos similares a funciones

// En este ejemplo encontramos dos métodos: getFullName y getHeigth
class Person2 {
    constructor(name, lastName, heigth) {
        this.name = name;
        this.lastName = lastName;
        this.heigth = heigth;
    }

    getFullName() {
        return `${this.name} ${this.lastName}`;
    }

    getHeigth() {
        return this.heigth > 1.70;
    }
}

var persona2 = new Person2('Juan', 'Rios');

console.log(persona2.getFullName() + persona2.getAlto() ? "es alto" : "es bajo");

//Herencia 

class Hijo extends Person2 {
    constructor(name, lastName, heigth, schoolName) {
        super();
        this.name = name;
        this.lastName = lastName;
        this.heigth = heigth;
        this.schoolName = schoolName;
    }
}

var hijo = new Hijo('Carlos', 'Rios', 1.80, 'Saleciano');

console.log('Nombre del hijo:' + hijo.getFullName());