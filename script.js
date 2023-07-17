let palabra = "ARBOL";
let intentos = 6;

const BOTON = document.getElementById("guess-button");
BOTON.addEventListener('click', intentar)

function intentar (){
    const INTENTO = leerIntento ();
    if (INTENTO == palabra){
        terminar ("<h1> ganaste! :)</h1>")
    }
    for (let i in palabra) {
        console.log [i]
    }
    for (let i in palabra){
        if (palabra[i] == INTENTO [i]){
        alert (" verde")
    }if (palabra[i] === INTENTO [i]){
        alert (INTENTO[i] + " verde")
    }else if (palabra. includes(INTENTO [i])){
         alert (INTENTO[i] + " amarillo")
    }else {
        alert (INTENTO[i]+ " gris")
    }
    intentos --
if (intentos==0){
    alert (" perdiste")
}
} 
}
    

function leerIntento (){
    let intento = document.getElementById ("guess-input").value;
    intento = intento.toUpperCase() 
    return intento
    }
function terminar (mensaje){
    let contenedor = getElementById("guesses");
    contenedor.innerHTML = mensaje;
}