const { Router }  = require("express")
const { Users , Moves} = require("../db");
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const jwt = require('jsonwebtoken');
const { validateUser } = require('../Controllers/Validation') 
const { createNewUser , userLogin , allUsers} = require('../Controllers/User')

const router = Router();

router.get('/' , allUsers)
// Ruta para login 
router.get('/login', userLogin)
// Ruta creacion de nuevo Usuario
router.post('/' , createNewUser)
// Ruta para actualizar movimientos 
router.get('/moves' , async (req, res) => {
    let { id } = req.query;
    let moves = await Users.findAll ({
             where: { id: id },
             include: {
                model: Moves,
              }
            })
        return res.json(moves)
})
//Ruta para registro de movimientos
router.post('/moves', async (req, res) => {
    const succes = true;
    const { name, mount, date, type, idUser } = req.body;
    const moveCreated = await Moves.create({
      name,
      mount,
      date,
      type,
    });
    try {
          let userFound = await Users.findByPk(idUser)
          console.log(userFound)
          await userFound.addMoves(moveCreated);
          res.json(moveCreated);
    
    } catch (error) {
      res.sendStatus(500);
    }
  });
  // Ruta para modificacion de movimientos



module.exports = router;
