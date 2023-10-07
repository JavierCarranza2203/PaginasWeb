let marca = "x";
let ultimoMovimiento, contadorMovimientos = 0;
let cajas = document.getElementsByClassName("caja");
let tablero;

function verificarGanador(){
    for (let i = 0; i < 3; i++) {
        if (tablero[i][0] === tablero[i][1] && tablero[i][1] === tablero[i][2]) 
        {
            return tablero[i][0];
        }
        if (tablero[0][i] === tablero[1][i] && tablero[1][i] === tablero[2][i]) 
        {
            return tablero[0][i];
        }
    }

    if (tablero[0][0] === tablero[1][1] && tablero[1][1] === tablero[2][2]) {
        return tablero[0][0];
    }
    if (tablero[0][2] === tablero[1][1] && tablero[1][1] === tablero[2][0]) {
        return tablero[0][2];
    }

    if(contadorMovimientos === 9){
        return "Empate";
    }
    
    return "";
}

function mostrarModal(mensaje){
    let container = document.getElementById("modalContainer");
    container.classList.add("section");
    container.classList.remove("section--hide");
    document.getElementById("modalMessage").innerText = mensaje;
}

document.getElementById("contenedor").addEventListener("click", (e)=> {
    if(e.target.classList.contains("caja"))
    {
        let casilla = document.getElementById(e.target.id);
        
        if(casilla.hasChildNodes() === false)
        {
            let i = document.createElement("i");
            i.classList.add("fa-solid");

            if(marca === "x")
            {
                marca = "o";
                i.classList.add("fa-xmark");
            }
            else
            {
                marca = "x";
                i.classList.add("fa-o");
            }
            
            ultimoMovimiento = casilla;
            contadorMovimientos++;
            casilla.appendChild(i);

            tablero = [
                [cajas[0].innerHTML, cajas[1].innerHTML, cajas[2].innerHTML],
                [cajas[3].innerHTML, cajas[4].innerHTML, cajas[5].innerHTML],
                [cajas[6].innerHTML, cajas[7].innerHTML, cajas[8].innerHTML]
            ];

            let ganador = verificarGanador();

            if(ganador === '<i class="fa-solid fa-o"></i>'){
                mostrarModal("¡Ha ganado el jugado 2!");
            }
            else if(ganador === '<i class="fa-solid fa-xmark"></i>'){
                mostrarModal("¡Ha ganado el juador 1!")
            }
            else if(ganador === "Empate"){
                mostrarModal("¡WoW, hubo un empate!");
            } 
        }
    }
});

document.getElementById("btnLimpiar").addEventListener("click", function(){
    for(let i = 0; i < cajas.length; i++)
    {
        cajas[i].innerHTML = '';
    }

    contadorMovimientos = 0;
    marca = "x";
});

document.getElementById("btnDeshacer").addEventListener("click", function(){
    if(ultimoMovimiento.innerHTML != '')
    {
        if(marca == "o")
        {
            marca = "x";
        }
        else
        {
            marca = "o"
        }

        contadorMovimientos--;
        ultimoMovimiento.innerHTML = '';
    }
});

document.getElementById("btnReiniciar").addEventListener("click", ()=>{
    location.reload();
});