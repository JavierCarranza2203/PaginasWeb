import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors());

app.get('/', (req, res)=>{
    console.log(res.query)
    res.json({mensaje:"Server Express respondiendo a get"});
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