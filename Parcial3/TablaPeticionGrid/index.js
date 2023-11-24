new gridjs.Grid({
    columns: ["ID", "Nombre", "Apellido", "RFC"],
    server: {
        url: 'http://localhost:8082',
        then: data => data.map( user => 
            [user.id, user.nombre, user.apellido, user.rfc])
    }
}).render(document.getElementById("wrapper"));