const http = require ('http');

const servidor = http.createServer((request, response) => {
    response.setHeader("Access-Control-Allow-Origin","*");
    response.write("Sevidor HTTP de Node contestando a peticion get");
    response.end;
});

servidor.listen(8082, () => {
    console.log("Servidor Node HTTP corriendo con puerto 8082");
});