const { Pool, Client } = require('pg')
const connectionString = 'postgres://nyxxhahekqyrnm:d42a0f7252d1f103fe296fd4d2386fb8b57ce19a13dce7a16433e421fa8faa1e@ec2-34-193-44-192.compute-1.amazonaws.com:5432/d8hiluub25otjj'

const pool = new Pool({
  connectionString,
})



const getUser=  async (req, res) =>{
    const response = await pool.query('SELECT * FROM usuarios');
    console.log(response);
    res.send('usuarios')
}




module.exports ={
    getUser
}