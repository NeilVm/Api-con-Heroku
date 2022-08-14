const {Pool} = require('pg');

    const pool = new Pool({
      user: "nyxxhahekqyrnm",
      host: "ec2-34-193-44-192.compute-1.amazonaws.com",
      database: "d8hiluub25otjj",
      password: "d42a0f7252d1f103fe296fd4d2386fb8b57ce19a13dce7a16433e421fa8faa1e",
      port: 5432,
      ssl:{
        rejectUnauthorized:false
    },
    });
    
    
    
//GET
const getUser = async (req, res) => {
    const response = await pool.query('SELECT * FROM usuario');
    res.json(response.rows);
}

// POST
const createUser= async (req, res) => {
    const { usuario, nombre }= req.body;
    const response= await pool.query('INSERT INTO usuario(usuario, nombre) VALUES ( $1, $2) ',[usuario, nombre] );
    console.log(response);
    res.send('usuario creado');
}

//seleccion por id

const getUserById = async (req, res) => {
    const id= req.params.usuario;
    const response = await pool.query('SELECT * FROM usuario WHERE usuario = $1', [id]);
    res.json(response.rows);
}

// Update
const updateUser = async (req, res) => {
 const id = req.params.usuario;
 const {nombre}= req.body;
 const response = await pool.query('UPDATE usuario SET  nombre =$1 where usuario = $2',[ nombre, id]);
 console.log(response);
 res.json('user update');

}

//Delete
const deleteUser = async (req, res) => {
    const id = req.params.usuario;
    const response = await pool.query('DELETE FROM usuario WHERE usuario =$1', [id]);
    console.log(response);
    res.json(`User ${id}  deleted successfully `);
}
 module.exports = {
    getUser,
    createUser,
    getUserById,
    deleteUser,
    updateUser
 }
