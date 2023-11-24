import express from 'express';
import cors from 'cors';
import mysql2 from 'mysql2';

const app = express();

app.use(cors());

const connection = mysql2.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'test'
});

app.get('/', (req, res)=>{
    let consulta = ''
    if(typeof(req.query.id)=='undefined'){
        consulta = `SELECT * FROM usuario`
    } else {
        consulta = `SELECT * FROM usuario WHERE id=${req.query.id}`
    }

    console.log();
    console.log("/============== El resultado de la consulta es ================/");

    connection.query(consulta,
    function(err, resulst, fields){
        console.log(resulst);
        res.json(resulst);
    });
});

app.post('/', (req,res)=>{
    res.json({mensaje:"Server Express respondiendo a post"});
});

app.delete('/', (req,res)=>{
    res.json({mensaje:"Server Express respondiendo a delete"});
});

app.listen(8082, (req,res)=>{
    console.log("Servidor Express en puerto 8082");
});