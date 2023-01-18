const { Router } = require('express')
const router = Router();
const {userLogin} = require('../controllers/auth.controler');

router.post('/auth/login', userLogin);

module.exports = router;

