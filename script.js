let lista = ["ARBOL", "ANGEL", "MARCO", "CARRO", "BARRO"];
//let palabra = "ARBOL";
let palabra = ""//lista [Math.floor(Math.random() * lista.length)];
//alert (palabra)
let intentos = 6;

const API = 'http://random-word-api.herokuapp.com/word?length=5&lang=es' 

fetch (API) 
.then (response =>response.json())
.then (response =>{
    console.log (response)
    palabra = response [0].toUpperCase ()
    console.log (palabra)
})
.catch(err => {
    console.log(err)
    palabra = "ANGEL"
})
const BOTON = document.getElementById("guess-button");
BOTON.addEventListener('click', intentar)

function intentar (){
    const INTENTO =leerIntento ();
    if (INTENTO==palabra){
        terminar ("<h1> ganaste! :)</h1>")
        //return 
    }
        const GRID = document.getElementById("grid");
        const ROW = document.createElement('div');
        ROW.className = 'row';
        for (let i in palabra){
            const SPAN = document.createElement('span');
            SPAN.className = 'letter';
            if (INTENTO[i]===palabra[i]){ //VERDE
                SPAN.innerHTML = INTENTO[i];
                SPAN.style.backgroundColor = 'green';
            } else if( palabra.includes(INTENTO[i]) ) { //AMARILLO
                SPAN.innerHTML = INTENTO[i];
                SPAN.style.backgroundColor = 'yellow';
            } else {      //GRIS
                SPAN.innerHTML = INTENTO[i];
                SPAN.style.backgroundColor = 'grey';
            }
            ROW.appendChild(SPAN)
        }
        GRID.appendChild(ROW)
    
    intentos --
    if (intentos==0){
        terminar ("<h1> perdiste! :( </h1>")
    }
}

function leerIntento (){
    let intento = document.getElementById ("guess-input").value;
    intento = intento.toUpperCase() 
    return intento
    }
function terminar (mensaje){
    BOTON.disabled = true; 
    let contenedor = document.getElementById("guesses");
    contenedor.innerHTML = mensaje;
}