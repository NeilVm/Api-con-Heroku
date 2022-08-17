const {Router} = require('express');
const router = Router();

const { getUser, createUser, getUserById, deleteUser, updateUser, MosUser, RegisterUser, loginUser, } = require('../controllers/index.controller');


router.get('/users', getUser);
router.get('/users/:usuario', getUserById);
router.post('/users', createUser);
router.delete('/users/:usuario', deleteUser);
router.put('/users/:usuario',updateUser);


// mostrar datos 

router.get('/api', MosUser);

// Registro
router.post('/api', RegisterUser);

// login

router.post('/login', verifyToken, loginUser);

function verifyToken(req, res, next){

    const bearerheader = req.headers['authorization'];
    if(typeof bearerheader !== 'undefined'){
        const bearerToken = bearerheader.split(" ")[1];
        req.token = bearerToken;
        next();
    }else{
        res.sendStatus(403);
    
    }}


module.exports = router;