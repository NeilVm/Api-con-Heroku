const express = require('express');
const app = express();

// middelwares

app.use(express.json());
app.use(express.urlencoded({extended: false}));


// rutas
app.use(require('./routes/index'));

app.get('/ping', (req, res)=>{
    pool.query(`SELECT NOW()`)
    res.send(pong)
});

const PORT =  process.env.PORT;
app.listen(PORT, function(){
    console.log("Servidor en linea", PORT)
});
console.log({PORT});
console.log('Server up')