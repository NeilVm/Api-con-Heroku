const {Router} = require('express');
const router = Router();

const { getUser, createUser, getUserById, deleteUser, updateUser } = require('../controllers/index.controller');


router.get('/users', getUser);
router.get('/users/:usuario', getUserById);
router.post('/users', createUser);
router.delete('/users/:usuario', deleteUser);
router.put('/users/:usuario',updateUser);


module.exports = router;