const { Users }  = require("../db.js");
const jwt = require('jsonwebtoken');


module.exports = {
  //Funciones controller para la ruta /user

  allUsers: async (req, res) => {
    try {
      const users = await User.findAll({
        attributes: { exclude: ['password'] },
        include: {
          model: User,
          as: "reportedUser",
        },
        order: [["id", "ASC"]],
      });
      return res.json(users)
    } catch (error) {
      console.log(error)
      return res.sendStatus(404).send(error);
    }
  },

  
  userLogin: async (req, res) => {

    //Recibe las argumentos por query ---> req.query
    var { email, password } = req.query;

    var users = await Users.findAll({
      where: {
        email: email
      }
    });
    if (users.length === 0) return res.status(200).json(
      {
        message: "El correo ingresado no existe.",
        login: false
      }
    )
    try {
      if (users.length > 0) {
        var user = users.filter(u => u.password === passwordInput);
        if (user.length === 0) return res.status(200).json({ message: "Los datos ingresados son incorrectos", login: false })
        if (user.length > 1) return res.status(200).json({ message: "Error! Hay más de un usuario con ese mail y contraseña", login: false })

        //token autentication - Se crea el token y se envia al cliente
        const token = jwt.sign({ idUser: user[0].idUser }, req.app.get('secretKey'), { expiresIn: '7d' });
        var resp = {
          username: user[0].name,
          id: user[0].idUser,
          login: true,
          token: token,
          message: "Autenticacion exitosa!"
        }
        console.log("resp sent")
        console.log(resp)
        return res.status(200).json(resp)
      }
      console.log(error);
      res.sendStatus(404).send(error);
    } catch {
      e => console.log(e)
    }
  },

  createNewUser: async (req, res) => {
    var { name, email, password, lastname } = req.body;
    const userData = await Users.findAll({
      where: {
        email: email
      }
    });

    if (userData.length > 0) return res.status(200).send({
      message: "Esa dirección de correo ya está registrada",
      registered: false,
      validEmail: false
    });

    try {  
      await Users.create({
        name,
        password,
        lastname,
        email,
      })
      return res.status(200).json({
        message: "Usuario creado con éxito",
        registered: true,
        validEmail: true
      });
    } catch (error) {
      console.log(error)
      return res.status(404).send({
        message: "No se generó usuario",
        registered: false,
        validEmail: true
      });
    }
  },
}

