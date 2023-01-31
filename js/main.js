class Jugador {
    constructor(nombre, edad, puntaje) {
        this.nombre = nombre;
        this.edad = edad;
        this.puntaje = puntaje;
    }
}
let puntajefinal = 0;

function ibai() {
    alert("Es un Gordito bueno que hace muy buenos eventos");
    alert("Tiene el Record Mundial de stream con 3.3M de viewers en simultaneo");
    alert("Este Evento fue La Gran Velada 2, con Invitados especiales como el Biza RAP"); 
    alert("Espero que hayas aprendido algo de el");    
}

function auron() {
    alert("Su nombre es Raúl Álvarez Genes");
    alert("Hoy tendria 34 años");
    alert("Mide  1.73, es un petizo y encima calvo");
    alert("A pesar de ser Millonario es mucho mas humilde que vos(joda)");
    alert("Bueno espero que hayas aprendido algo de este Bonito Calvo");
}

function lit() {
    alert("Su nombre real Mauro Roman Herrera");
    alert("A los 16 años comenzo a participar en la plaza como freestyler");
    alert("En un principio había elegido el nombre de Mawz");
    alert(" 'Lit' significa encendido y 'Killah' significa asesino");
    alert("Espero que hayas aprendido algo que este pendejo que tiene un humor negro, APAGA EL CELULAR");
}

// Esta funcion  o mini juego es para saber su steramer favorito, funciona preguntando 
// su preferencia de streamer dandole 3 opciones
// dependiendo de que responda se activara la funcion correspondiente con algunas curiosidades
// de cada uno a su vez suma 1 punto o 100 si su streamer favorito es auron
function preguntados() {
    let respuesta1 = prompt("¿Quién es tu streamer Favorito?(Auron Ibai o Lit Killah)");
    if (respuesta1.toLowerCase() == "ibai") {
        ibai();
        puntajefinal = (puntajefinal + 1);
    }
    else if (respuesta1.toLowerCase() == "auron") {
        auron();
        puntajefinal = (puntajefinal + 100);  
    }
    else if (respuesta1.toLowerCase() == "lit" || "lit killah" || "litkillah") {
        lit();
        puntajefinal = (puntajefinal + 1);
    }
}
/* esta funcion   lo que hace es declarar 3 variables para que luego sean procesadas
este proceso es simplemnete la fuma de los 3 campeonatos de argentina, del mundo.
te suma 15 puntos si acertas las 3. si no No te da nada.
*/
function sosargento() {
    let ano1;
    let ano2;
    let ano3;
    alert("¿En que años salio Argentina campeon?Ingrese 1 año a la vez y unicamente 2 digitos")
    ano1 = prompt("Primer Campeonato de argentina");
    ano2 = prompt("Segundo Campeonato de Argentina");
    ano3 = prompt("Tercer Campeonato de Argentina");
    respuesta2 = 0;
    respuesta2 = (parseInt(ano1) + parseInt(ano2) + parseInt(ano3));
    if (respuesta2 == 186) {
        alert("SOS ARGENTINO! te felicito");
        puntajefinal = (puntajefinal +15);
    }
    else {
        alert("Te falta calle");
    }
}

//comienza el programa hace cargar a 1 jugador y juega primero luego termina y carga al segundo
// luego al final del juego cuenta los puntos y los publica
alert("Vamos a jugar un poco");
alert("Primero vamos a cargar al jugador 1");

//carga del jugador 1
const jugador1 = new Jugador(
    (prompt("ingrese nombre del jugador 1")), (prompt("ingrese la edad del J1"))
)
//comienza el el script
preguntados();
sosargento();
alert("Felicidades! obstubiste: " + puntajefinal);
console.log("Felicitaciones " + jugador1.nombre + " obtubiste un puntaje final de: ", puntajefinal, " Felicitaciones");
jugador1.puntaje = puntajefinal;

puntajefinal = 0;

alert("Ahora vamos a cargar al jugador 2");
const jugador2 = new Jugador(
    (prompt("ingrese nombre del jugador 2")), (prompt("ingrese la edad del J2"))
)
preguntados();
sosargento();
alert("Felicidades! obstubiste: " + puntajefinal);
jugador2.puntaje = puntajefinal;
alert("Fin del juego");
console.log("Felicitaciones " + jugador2.nombre + " obtubiste un puntaje final de: ", puntajefinal, " Felicitaciones");
console.log("Fin del juego");
console.log("Jugador 1, NOMBRE: " + jugador1.nombre + " con una edad de " + jugador1.edad + " con un puntaje de " + jugador1.puntaje + " Puntos");
console.log("Jugador 2, NOMBRE: " + jugador2.nombre + " con una edad de " + jugador2.edad + " con un puntaje de " + jugador2.puntaje + " Puntos");


