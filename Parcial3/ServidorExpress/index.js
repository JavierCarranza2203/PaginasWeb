import express from 'express';
import cors from 'cors';
import mysql2 from 'mysql2';
import bodyParser from 'body-parser';

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

const connection = mysql2.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'test'
});

app.get('/', (req, res)=>{
    let consulta = ''
    if(req.query.id == '0' || typeof(req.query.id) == 'undefined'){
        consulta = `SELECT * FROM usuario`
    } else {
        consulta = `SELECT * FROM usuario WHERE id=${req.query.id}`
    }

    console.log();
    console.log("/============== El resultado de la consulta es ================/");

    connection.query(consulta,
    function(err, result, fields){
        // Configurar encabezados para evitar el almacenamiento en caché
        res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, private');
        res.setHeader('Pragma', 'no-cache');
        res.setHeader('Expires', '0');

        res.json(result);
    });
});

app.post('/', (req,res)=>{
    const nombre = req.body.Nombre;
    const apellido = req.body.Apellido;
    const rfc = req.body.Rfc;

    const script = `INSERT INTO usuario (nombre, apellido, rfc) VALUES ('${nombre}', '${apellido}', '${rfc}')`;

    connection.query(script, function (err, results, fields){
        if(results && results.affectedRows == 1){
            res.status(200).json({ mensaje: "El usuario se ha agregado"});
        }
        else{
            res.status(400).json({mensaje: "No se pudo agregar el usuario"});
        }
    })
});

app.delete('/', (req, res) => {
    let script;

    if (typeof req.query.id === 'undefined') {
        res.status(400).json({ mensaje: "El ID no es válido" });
    } else {
        script = `DELETE FROM usuario WHERE id = ${req.query.id}`;
    }

    connection.query(script, function (err, results, fields) {
        if (results && results.affectedRows === 1) {
            res.status(200).json({ mensaje: "El usuario se ha eliminado" });
        } else {
            res.status(400).json({ mensaje: "No se pudo eliminar el usuario" });
        }
    });
});


app.listen(8082, (req,res)=>{
    console.log("Servidor Express en puerto 8082");
});