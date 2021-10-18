const { Router }  = require("express")
const { Users , InOut} = require("../db");
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

const router = Router();

router.get('/' , (req, res) => {
    res.json('funciona')
})

router.get('/moves' , async (req, res) => {
    let { name } = req.body
    let moves = await Users.findAll ({
             where: { name: { [Sequelize.Op.iLike] : `%${name}%`} },
            })
        return res.json(moves)
})



module.exports = router;
