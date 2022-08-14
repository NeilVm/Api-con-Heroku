const { Client } = require("pg");

const obtenerCategorias =async () =>{
const client = new Client({
  user: "nyxxhahekqyrnm",
  host: "ec2-34-193-44-192.compute-1.amazonaws.com",
  database: "d8hiluub25otjj",
  password: "d42a0f7252d1f103fe296fd4d2386fb8b57ce19a13dce7a16433e421fa8faa1e",
  port: 5432,
  ssl:{
    rejectUnauthorized:false
},
});
await client.connect();

const res = await client.query("select * from usuario");
debugger;
const result = res.rows;

await client.end()
return result;
}






