let marca = "x"

document.getElementById("contenedor").addEventListener("click", function(e){
    let casilla = document.getElementById(e.target.id);
    
    if(casilla.hasChildNodes() === false)
    {
        let i = document.createElement("i");
        i.classList.add("fa-solid");

        if(marca === "x")
        {
            i.classList.add("fa-xmark")
            marca = "o"
        }
        else
        {
            marca = "x"
            i.classList.add("fa-o");
        }
        
        casilla.appendChild(i);
    }
});