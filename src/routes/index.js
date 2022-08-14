const {Router} = require('express');
const router = Router();

const { getUser, createUser, getUserById, deleteUser } = require('../controllers/index.controller');


router.get('/users', getUser);
router.get('/users/:usuario', getUserById);
router.post('/users', createUser);
router.delete('/users/:usuario', deleteUser);




module.exports = router;