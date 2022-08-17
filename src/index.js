const express = require('express');
const app = express();

// midd
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.set("view engine", "ejs");

// Rutas

app.use(require('./routes/index'));


const PORT =  process.env.PORT || 3000;
app.listen(PORT, function(){
    console.log("Servidor en linea", PORT)
});
console.log({PORT});
console.log('Server up')