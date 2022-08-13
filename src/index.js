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


app.listen(3000);

console.log('Server up')