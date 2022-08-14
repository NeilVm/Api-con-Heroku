const {Pool} = require('pg')
const connectionString =  'postgres://ckpqmstmomyhow:11f2bf1238a592032bbd28aedf39d3a65b04f91a427866031a030d1f3e6b3d32@ec2-44-193-178-122.compute-1.amazonaws.com:5432/d88nit0ug81m05'

const pool = new Pool({connectionString})



const getUser=  async (req, res) =>{
    const response = await pool.query('SELECT * FROM usuarios');
    console.log(response);
    res.send('usuarios')
}




module.exports ={
    getUser
}