const {Router} = require('express');
const router = Router();

const { getUser, createUser, getUserById, deleteUser, updateUser } = require('../controllers/index.controller');


router.get('/users', getUser);
router.get('/users/:usuario', getUserById);
router.post('/users', createUser);
router.delete('/users/:usuario', deleteUser);
router.put('/users/:usuario',updateUser);

// registro
router.get('/users/inicio',(req, res) => {
    res.render('home');
});
// login

router.get('/users/login',(req, res) => {
    res.render('login');
});
// registro
router.get('/users/registro',(req, res) => {
    res.render('register');
});


module.exports = router;