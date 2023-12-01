const tableContainer = document.getElementById("wrapper");
const txtNombre = document.getElementById("txtNombre");
const txtApellido = document.getElementById("txtApellido");
const txtRfc = document.getElementById("txtRfc");

let table;

function editarRegistro(id){
    alert(id)
}

function eliminarRegistro(id){
    Swal.fire({
        title: "¿Está seguro de borrar el cliente?",
        text: "No se podrá recuperar la información",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Si, estoy seguro!"
    }).then(async (result) => {
        if (result.isConfirmed) {

            let request = await fetch('http://localhost:8082?id='+id, {
                method: 'DELETE'
            });

            if(request.ok)
            {
                Swal.fire({
                    title: "¡Acción realizada con éxito!",
                    text: "¡El usuario se ha borrado!",
                    icon: "success"
                });

                ActualizarTabla();
            }
        }
    });
}

function IniciarTabla()
{
    table = new gridjs.Grid({
        search: true,
        pagination: {
            limit: 8
        },
        columns: ["ID", "Nombre", "Apellido", "RFC", {
            name: 'Acciones',
            formatter: (cell, row) => {
                const editarIcono = `<i class="fas fa-edit"></i>`;
                const eliminarIcono = `<i class="fas fa-trash" onclick="eliminarRegistro(${row.cells[0].data})"></i>`;

                return gridjs.html(`<div class="acciones">${editarIcono} ${eliminarIcono}</div>`);
            }
        }],
        server: {
            url: 'http://localhost:8082',
            then: data => data.map( user => [user.id, user.nombre, user.apellido, user.rfc])
        },
        language: {
            'search': {
                'placeholder': '🔍 Escriba para buscar...'
            },
            'pagination': {
                'previous': 'Atrás',
                'next': 'Siguiente',
                'showing': '😃 Mostrando',
                'results': () => 'Resultados',
                'to': 'de',
                'of': 'de'
            }
        }
    }).render(tableContainer);
}

function ActualizarTabla() 
{
    table.updateConfig({
        server: {
            url: 'http://localhost:8082',
            then: data => data.map( user => [user.id, user.nombre, user.apellido, user.rfc])
        }
    }).forceRender();
}

window.addEventListener("load", ()=>{
    try
    {
        IniciarTabla();
    }
    catch(error)
    {
        Swal.fire({
            icon: "error",
            title: "¡Hubo un error inesperado!",
            text: error
        });
    }
});

document.getElementById("btnAgregar").addEventListener("click", async()=>{
    try
    {
        if(txtNombre.value == "" || txtApellido.value == "" || txtRfc.value == "")
        {
            throw new Error("Por favor llene todos los campos");
        }

        let data = new FormData();
        data.append("Nombre", txtNombre.value);
        data.append("Apellido", txtApellido.value);
        data.append("Rfc", txtRfc.value);

        let request = await fetch('http://localhost:8082', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: new URLSearchParams(data)
        });

        if(request.ok)
        {

            let requestJson = await request.json();
            let mensaje = requestJson.mensaje;

            Swal.fire({
                icon: "success",
                title: "¡Acción realizada con éxito!",
                text: mensaje
            });

            ActualizarTabla();

            txtNombre.value = "";
            txtApellido.value = "";
            txtRfc.value = "";
        }
        else
        {
            let requestJson = await request.json();
            let mensaje = requestJson.mensaje;

            throw new Error(mensaje);
        }
    }
    catch(error)
    {
        Swal.fire({
            icon: "error",
            title: "¡Hubo un error inesperado!",
            text: error
        });
    }
});