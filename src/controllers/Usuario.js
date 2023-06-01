const { response } = require("../response/response");
const { createUserBb } = require("../services/Usuario");


const userCreate = (req, res, next) => {
    const newUsuario = req.body;
    return createUserBb(newUsuario)
        .then(newUser => response(req, res, next, 201, "Creado usuario con exito", newUser))
        .catch(error => {
            console.error(error);
            next({ status: 500, message: "error en la base datos" });
        });
};

module.exports = { userCreate };