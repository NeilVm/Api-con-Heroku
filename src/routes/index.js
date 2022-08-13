const {Router}= require('express');
const router = Router();
const {getUser} = require('../controllers/index.controller');


router.get('/usuarios', getUser);




module.exports = router;