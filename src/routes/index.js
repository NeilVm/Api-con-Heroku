const {Router} = require('express');
const router = Router();

const { getUser, createUser } = require('../controllers/index.controller');


router.get('/users', getUser);
router.post('/users', createUser);


module.exports = router;