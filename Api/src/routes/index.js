const { Router } = require('express');

const moves = require('./moves.js');


const router = Router();

router.use('/moves' , moves)



module.exports = router;
