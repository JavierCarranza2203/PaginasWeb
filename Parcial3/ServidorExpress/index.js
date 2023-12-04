import express from 'express';
import cors from 'cors';
import mysql2 from 'mysql2';
import bodyParser from 'body-parser';
import fs from 'fs/promises';
import ExcelJS from 'exceljs';
import path from 'path'

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

app.get('/generar-excel', (req, res) => {
    connection.query('SELECT * FROM usuario', function (error, results, fields){
        if (error) {
            console.error('Error en la consulta SQL:', error);
            res.status(500).send('Hubo un error en la consulta SQL');
        } else {
            // Crea un nuevo libro de Excel
            let workbook = new ExcelJS.Workbook();
            const sheet = workbook.addWorksheet('Usuarios');

            // Añade encabezados de columna al archivo Excel
            const columnHeaders = fields.map(field => field.name);
            sheet.addRow(columnHeaders);

            // Añade los datos de la base de datos al archivo Excel
            results.forEach(row => {
                const rowData = columnHeaders.map(header => row[header]);
                sheet.addRow(rowData);
            });

            workbook.xlsx.writeBuffer().then(excelBuffer => {
                res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
                res.setHeader('Content-Disposition', 'attachment; filename=usuarios.xlsx');
                res.send(excelBuffer);
        
            }).catch(writeError => {
                console.error('Error al generar el archivo Excel:', writeError);
                res.status(500).send('Hubo un error al generar el archivo Excel');
            });
        }
    });
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

app.put('/', async (req, res) => {
    const { id, nombre, apellido, rfc } = req.body;

    // Intenta conectar a la base de datos
    try {
        const script = `UPDATE usuario SET nombre = '${nombre}', apellido = '${apellido}', rfc = '${rfc}' WHERE id = '${id}'`;

        connection.query(script, function(err, results, fields){
            if (results && results.affectedRows === 1) {
                res.status(200).json({ mensaje: "El usuario se ha actualizado" });
            } else {
                res.status(400).json({ mensaje: "No se pudo actualizar el usuario" });
            }
        })
    } catch (error) {
        console.error('Error al actualizar usuario:', error);
        res.status(500).json({ mensaje: 'Hubo un error al actualizar el usuario' });
    }
});

app.listen(8082, (req,res)=>{
    console.log("Servidor Express en puerto 8082");
});