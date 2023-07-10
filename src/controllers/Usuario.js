const { response } = require("../response/response");
const { createUserBb, getUserBd, updateUserDb, deleteUserDb, optionsUsersDb, allUserForDb, ageism, sexoism, studyism, ethnicism, allTableUser, activityism, salarism } = require("../services/Usuario");
const createCvs  = require("../utils/cvs");


const userCreate = (req, res, next) => {
    const { idNucleo, newUsuario } = req.body;
    return createUserBb(idNucleo, newUsuario)
        .then(newUser => response(req, res, next, 201, "Creado usuario con exito", newUser))
        .catch(error => {
            console.error(error);
            next({ status: 500, message: "error en la base datos" });
        });
};

const userForId = (req, res, next) => {
    const { id } = req.body;
    return getUserBd(id)
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

const allUserForNucleo = (req, res, next) => {
    const { idNucleo } = req.query;
    allUserForDb(idNucleo)
        .then(allUser => {
            return response(req, res, next, 200, "Usuarios en el nucleo", allUser)
        })
        .catch(error => {
            console.error(error);
            next({ status: 500, message: "Error en la base de datos " })
        })
}

const ageismController = (req, res, next) => {
    ageism()
        .then(results => {
            if (results.length) {
                const formatData = results.map(({ dataValues }) => ({ [dataValues.rango_edad]: parseInt(dataValues.cantidad) }))
                return response(req, res, next, 200, "Usuarios por edad", formatData)
            } else {
                throw { status: 404, message: "No hay datos en la base de datos" }
            }
        }).catch(error => {
            console.error("Error al obtener los usuarios por rango de edad:", error);
            next(error);
        });
}

const sexoismController = (req, res, next) => {
    sexoism()
        .then(results => {
            if (results.length) {
                const formatData = results.map(({ dataValues }) => ({ [dataValues.sexo]: parseInt(dataValues.cantidad) }));
                return response(req, res, next, 200, "Usuarios por sexo", formatData)
            } else {
                throw { status: 404, message: "No hay datos en la base de datos" }
            }
        })
        .catch(error => {
            console.error(error);
            next(error);
        })
};

const studyismController = (req, res, next) => {
    studyism()
        .then(results => {
            if (results.length) {
                const formatData = results.map(({ dataValues }) => ({ [dataValues.estudio]: parseInt(dataValues.cantidad) }));
                return response(req, res, next, 200, "Usuarios por estudio", formatData)
            } else {
                throw { status: 404, message: "No hay datos en la base de datos" }
            }
        })
        .catch(error => {
            console.error(error);
            next(error);
        })
};

const ethnicismController = (req, res, next) => {
    ethnicism()
        .then(results => {
            if (results.length) {
                const formatData = results.map(({ dataValues }) => ({ [dataValues.etnia]: parseInt(dataValues.cantidad) }));
                return response(req, res, next, 200, "Usuarios por etnia", formatData)
            } else {
                throw { status: 404, message: "No hay datos en la base de datos" }
            }
        })
        .catch(error => {
            console.error(error);
            next(error);
        })
};

const generateCvs = (req, res, next) => {
    allTableUser()
        .then(users => {
            createCvs(users);
        })
        .then(() => {
            const csvFilePath = "usuarios.csv";

            // Descargar el archivo CSV
            res.download(csvFilePath, "usuarios.csv", err => {
                if (err) {
                    console.error("Error al descargar el archivo CSV:", err);
                } else {
                    console.log("Archivo CSV descargado exitosamente");
                }
            });
        })
        .catch(error => { console.error(error); next({ "status": 500, "message": "error desconocido" }) });
};

const activityismController = (req, res, next) => {
    activityism()
        .then(results => {
            if (results.length) {
                const formatData = results.map(({ dataValues }) => ({ [dataValues.actividad]: parseInt(dataValues.cantidad) }));
                return response(req, res, next, 200, "Usuarios por actividad", formatData)
            } else {
                throw { status: 404, message: "No hay datos en la base de datos" }
            }
        })
        .catch(error => {
            console.error(error);
            next(error);
        })
};

const salarismController = (req, res, next) => {
    salarism()
        .then(results => {
            if (results.length) {
                const formatData = results.map(({ dataValues }) => ({ [dataValues.rango_salario]: parseInt(dataValues.cantidad) }));
                return response(req, res, next, 200, "Usuarios por etnia", formatData)
            } else {
                throw { status: 404, message: "No hay datos en la base de datos" }
            }
        })
        .catch(error => {
            console.error(error);
            next(error);
        })
};

module.exports = { userCreate, userForId, updateUser, deleteUser, optionsUsers, allUserForNucleo, ageismController, sexoismController, studyismController, ethnicismController, generateCvs, activityismController, salarismController };