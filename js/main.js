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

function sosargento() {
    let año1;
    let año2;
    let año3;
    alert("¿En que años salio Argentina campeon?Ingrese 1 año a la vez y unicamente 2 digitos")
    ano1 = prompt("Primer Campeonato de argentina");
    ano2 = prompt("Segundo Campeonato de Argentina");
    ano3 = prompt("Tercer Campeonato de Argentina");
    respuesta2 = 0;
    respuesta2 = (parseInt(ano1) + parseInt(ano2) + parseInt(ano3));
    if (respuesta2 == 186) {
        alert("SOS ARGENTINO! te felicito");
        puntajefinal = (puntajefinal +1);
    }
    else {
        alert("Te falta calle");
    }
}


preguntados();
sosargento();
console.log("Obstubiste un puntaje final de: ", puntajefinal, " Felicitaciones");


