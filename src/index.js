const express = require('express');
const app = express();

// middelwares

app.use(express.json());
app.use(express.urlencoded({extended: false}));


// rutas
app.use(require('./routes/index'));

const PORT =  process.env.PORT;
app.listen(PORT, function(){
    console.log("Servidor en linea", PORT)
});
console.log({PORT});
console.log('Server up')