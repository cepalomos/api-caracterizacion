const { response } = require("../response/response");
const { createUserBb, getUsersNucleoBd, updateUserDb, deleteUserDb, optionsUsersDb } = require("../services/Usuario");


const userCreate = (req, res, next) => {
    const { idNucleo, newUsuario } = req.body;
    return createUserBb(idNucleo, newUsuario)
        .then(newUser => response(req, res, next, 201, "Creado usuario con exito", newUser))
        .catch(error => {
            console.error(error);
            next({ status: 500, message: "error en la base datos" });
        });
};

const getAllUserNucleo = (req, res, next) => {
    const { id } = req.body;
    return getUsersNucleoBd(id)
        .then(users => response(req, res, next, 200, "Usuarios", users))
        .catch(error => {
            console.error(error);
            next({ status: 404, message: "No hay usarios en la base de datos" })
        })
};

const updateUser = (req, res, next) => {
    const { dataUpdate, id } = req.body;
    return updateUserDb(id, dataUpdate)
        .then((userUpdate) =>
            response(req, res, next, 200, "Actualizacion exitosa", userUpdate)
        )
        .catch((error) => {
            console.error(error);
            next({ status: 400, message: "Error en el servidor" });
        });
};

const deleteUser = (req, res, next) => {
    const { id } = req.body;
    return deleteUserDb(id)
        .then((userDestroy) =>
            response(req, res, next, 200, "Nucleo eliminado", userDestroy)
        )
        .catch((error) => {
            console.log(error);
            next({ status: 404, message: "No se encotro el usuario" });
        });
};

const optionsUsers = (req, res, next) => {
    try {
        const options = optionsUsersDb();
        return response(
            req,
            res,
            next,
            200,
            "opciones de campos de base de datos",
            options
        );
    } catch (error) {
        console.error(error);
        next({ status: 500, message: "Error desconocido en la base datos" });
    }
};

module.exports = { userCreate, getAllUserNucleo, updateUser, deleteUser, optionsUsers };