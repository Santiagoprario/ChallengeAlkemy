const { Router } = require('express');

const users = require('./User.js');


const router = Router();

router.use('/users' , users)



module.exports = router;
