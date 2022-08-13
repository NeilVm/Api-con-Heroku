const {Router}= require('express');
const router = Router();
const {getUser} = require('../controllers/index.controller');
const {Pool} = require('pg');
const{pool}= require('../database/database');




router.get('/usuarios', getUser);

Pool.get('/ping', (req, res)=>{
    pool.query(`SELECT NOW()`)
    res.send(pong)
});



module.exports = router;