//Variable para el turno
let marca = "x";
//Contador de movimientos y ultimo movimiento
let ultimoMovimiento, contadorMovimientos = 0;
//Array de casillas
let cajas = document.getElementsByClassName("caja");
//Declaracion de la matriz tablero
let tablero;

//Funcion para saber si ya ganó alguien o si hay empate
function verificarGanador(){

    //Recorre la matriz
    for (let i = 0; i < 3; i++) {
        //Evalua las filas
        if (tablero[i][0] === tablero[i][1] && tablero[i][1] === tablero[i][2]) 
        {
            return tablero[i][0];
        }
        //Evalua las columnas
        if (tablero[0][i] === tablero[1][i] && tablero[1][i] === tablero[2][i]) 
        {
            return tablero[0][i];
        }
    }

    //Evalua las diagonales
    if (tablero[0][0] === tablero[1][1] && tablero[1][1] === tablero[2][2]) {
        return tablero[0][0];
    }
    if (tablero[0][2] === tablero[1][1] && tablero[1][1] === tablero[2][0]) {
        return tablero[0][2];
    }

    //Evalua si la variable global "contadorMovimientos" es igual a 9 (El numero maximo de movimientos)
    if(contadorMovimientos === 9){
        return "Empate";
    }
    
    //Si regresa cadena vacia, el juego está en curo
    return "";
}

//Funcion para mostrar un popup
function mostrarModal(mensaje){

    //Recupera el "section" contenedor del modal
    let container = document.getElementById("modalContainer");

    //Agrega la clase "section" para mostrar el popup
    container.classList.add("section");

    //Remueve la clase por default "section--hide" que sirve para ocultar el modal
    container.classList.remove("section--hide");

    //Recupera el elemento "modalMessage" y asigna el mensaje recibido por parametro
    document.getElementById("modalMessage").innerText = mensaje;
}

//Recupera el contenedor del tablero
document.getElementById("contenedor").addEventListener("click", (e)=> {

    //Como hay mas cajas dentro del tablero, evalua si el elemento al que se le hizo click contiene la clase "caja"
    if(e.target.classList.contains("caja"))
    {
        //Asigna el elemento al que se le hizo click
        let casilla = document.getElementById(e.target.id);
        
        //Evalua si la casilla contiene un elemento hijo
        if(casilla.hasChildNodes() === false)
        {
            //Crea un elemento <i></i> (icon)
            let i = document.createElement("i");

            //Agrega la clase de la libreria FontAwesome
            i.classList.add("fa-solid");

            //Evalua la variable global "marca" para saber que figura debe asignar
            if(marca === "x")
            {
                //Cambia el turno a "o"
                marca = "o";
                //Asigna la clase con la x
                i.classList.add("fa-xmark");
            }
            else
            {
                //Cambia el turno a "x"
                marca = "x";
                //Asigna la clase
                i.classList.add("fa-o");
            }
            
            //Asigna a la variable global la casilla que se acaba de hacer click
            ultimoMovimiento = casilla;

            //Incrementa en 1 el contador de movimientos
            contadorMovimientos++;

            //Agrega el icono a la casilla
            casilla.appendChild(i);

            //Actualiza el tablero
            tablero = [
                [cajas[0].innerHTML, cajas[1].innerHTML, cajas[2].innerHTML],
                [cajas[3].innerHTML, cajas[4].innerHTML, cajas[5].innerHTML],
                [cajas[6].innerHTML, cajas[7].innerHTML, cajas[8].innerHTML]
            ];

            //Llama la funcion verificarGanador()
            let ganador = verificarGanador();

            //Evalua si el elemento que regresa la funcion es un icono con la clase de la figura "o"
            if(ganador === '<i class="fa-solid fa-o"></i>'){

                //Llama la funcion para mostrar el modal y asigna el mensaje
                mostrarModal("¡Ha ganado el jugado 2!");
            }
            //Evalua si el elemento que regresa la funcion es un icono con la clase de la figura "x"
            else if(ganador === '<i class="fa-solid fa-xmark"></i>'){

                //Llama la funcion para mostrar el modal y asigna el mensaje

                mostrarModal("¡Ha ganado el juador 1!")
            }
            else if(ganador === "Empate"){  //Si es un empate, muestra el modal con el mensaje
                mostrarModal("¡WoW, hubo un empate!");
            } 
        }
    }
});

//Recupera el btnLimpiar y agrega el evento click
document.getElementById("btnLimpiar").addEventListener("click", function(){
    //Recorre las cajas del array y limpia su contenido
    for(let i = 0; i < cajas.length; i++)
    {
        cajas[i].innerHTML = '';
    }

    //Reestablece el contador de movimientos y asigna el turno de nuevo a la "x"
    contadorMovimientos = 0;
    marca = "x";
});

//Recupera el btnDeshacer y asigna el evento click
document.getElementById("btnDeshacer").addEventListener("click", function(){
    //Si el contenido de la casilla del ultimo movimiento es diferente de vacio, puede hacer operaciones
    if(ultimoMovimiento.innerHTML != '')
    {
        //Cambia el turno
        if(marca == "o")
        {
            marca = "x";
        }
        else
        {
            marca = "o"
        }

        //Decrementa el contador de movimientos
        contadorMovimientos--;

        //Y limpia el contenido de la ultima casilla que se le hizo click
        ultimoMovimiento.innerHTML = '';
    }
});

document.getElementById("btnReiniciar").addEventListener("click", ()=>{
    //Recarga la pagina
    location.reload();
});