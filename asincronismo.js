/*
Las promesas sirven para manejar nuestro código asíncrono.

“Una Promesa es un objeto que representa la terminación o el fracaso eventual 
de una operación asíncrona”, o dicho de forma más cotidiana, se va a mandar 
una función para ver si falla o se ejecuta con éxito.

Al crear una Promesa debemos pasarle por argumento la función que vamos a 
ejecutar de forma asíncrona, dicha función va a recibir dos parámetros para 
evaluar si se ejecuto bien la función o si fallo.

Nuestra promesa va a tener dos métodos para saber si todo salió bien o fallo. 
El método then se encarga cuando la promesa se cumplió exitosamente, mientras 
que el método catch se encarga cuando la promesa falla.

Dentro de JavaScript tenemos dos funciones para ejecutar una función después de 
algún tiempo, estas funciones son:

• setInterval: ejecutara una función cada x tiempo.
• setTimeout: ejecutara una función después de x tiempo.

Si queremos resolver varias promesas a la misma vez, Promise cuenta con un método llamado all que recibe un array de promesas como parámetro. Este método se termina cuando todas las promesas del array se terminan de ejecutar. Si una de las promesas falla entonces el método all saltara un error mandándote al método catch.

Promise también cuenta con el método race que te regresa los resultados de la promesa que termine primero.
*/

const getUser = new Promise(function(fOk, fError) {
    setTimeout(() => {
        fOk();
        //fError('Este es el error');
    }, 2000);
});

getUser
    .then(() => {
        console.log("La promesa se ha ejecutado correctamente")
    }).catch((mensaje) => {
        console.log("Se genero un error: " + mensaje);
    });

fetch('https://randomuser.me/api/')
    .then((resp) => {
        console.log(resp);
        // resp.json retorna una promesa
        return resp.json();
    }).then((data) => {
        var results = data.results;

        console.log('Datos:', results);
        console.log('Result[0]', results[0]);

    })
    .catch((error) => {
        console.log('Algo falló', error);
    });

/*
 Una función asíncrona va a ser como una función normal, pero poniendo código asíncrono de forma que sea 
 más fácil de leer de forma síncrona.
 Para declarar una función asíncrona se usa la palabra reservada async, luego de eso declaras tu función de 
 forma normal. Dentro de una función asíncrona cuentas con otra palabra reservada llamada await, lo que hará 
 esta palabra es indicar que se debe esperar a que termine de ejecutarse ese fragmento de código antes de 
 continuar.
 Vamos a realizar peticiones con fetch a la API de yts para pedirle películas según su categoría y 
 mostrarlas dentro de PlatziVideo. Sin el uso de funciones asíncronas para cada fetch tendríamos que usar los 
 métodos then y catch, en cambio gracias a async/await solo debemos escribir la palabra await antes de cada promesa.
 */

(async function load() {

    // no se necesita el then porque el await espera hasta que se ejecute o falle la promesa
    const resp = await fetch('https://yts.am/api/v2/list_movies.json?genre=action');
    const data = await resp.json();
    console.log('Datos');
    console.table(data.data);
    console.log('--');
})();