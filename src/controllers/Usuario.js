const { response } = require("../response/response");
const { createUserBb, getUserBd } = require("../services/Usuario");


const userCreate = (req, res, next) => {
    const { idNucleo, newUsuario } = req.body;
    return createUserBb(idNucleo, newUsuario)
        .then(newUser => response(req, res, next, 201, "Creado usuario con exito", newUser))
        .catch(error => {
            console.error(error);
            next({ status: 500, message: "error en la base datos" });
        });
};

const getAllUser = (req, res, next) => {
    return getUserBd()
        .then(users => response(req, res, next, 200, "Usuarios", users))
        .catch(error => {
            console.error(error);
            next({ status: 404, message: "No hay usarios en la base de datos" })
        })
};

module.exports = { userCreate, getAllUser };