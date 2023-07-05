const { User, conn: sequelize } = require('../db');

const createUserBb = (idUser, data) => {
    return User.create(data)
        .then(user => user.setNucleo(idUser));
}

const getUserBd = (idUser) => {
    return User.findAll({ where: { UserId: idUser } });
}

const updateUserDb = (id, dataUpdate) => {
    return User.update(dataUpdate, { where: { id } });
};

const deleteUserDb = (id) => {
    return User.destroy({ where: { id } });
};

const optionsUsersDb = () => {
    return ({
        sexo: User.rawAttributes.sexo.validate.isIn[0],
        estudio: User.rawAttributes.estudio.validate.isIn[0],
        etnia: User.rawAttributes.etnia.validate.isIn[0],
        actividad: User.rawAttributes.actividad.validate.isIn[0],
        salud: User.rawAttributes.salud.validate.isIn[0],
    });
};

const allUserForDb = (idNucleo) => {
    return User.findAll({ where: { nucleoId: idNucleo } });
}

const ageism = () => {

    return User.findAll({
        attributes: [
            [sequelize.literal("CASE WHEN edad < 18 THEN 'Menores de 18' WHEN edad < 30 THEN '18-29' WHEN edad < 40 THEN '30-39' WHEN edad < 50 THEN '40-49' ELSE 'Mayores de 50' END"), "rango_edad"],
            [sequelize.fn("COUNT", sequelize.col("id")), "cantidad"]
        ],
        group: "rango_edad"
    })
}

const sexoism = () => {
    return User.findAll({
        attributes: [
            "sexo",
            [sequelize.fn("COUNT", sequelize.col("id")), "cantidad"]
        ],
        group: "sexo"
    });
};

const studyism = () => {
    return User.findAll({
        attributes: [
            "estudio",
            [sequelize.fn("COUNT", sequelize.col("id")), "cantidad"]
        ],
        group: "estudio"
    })
};

const ethnicism = () => {
    return User.findAll({
        attributes: [
            "etnia",
            [sequelize.fn("COUNT", sequelize.col("id")), "cantidad"]
        ],
        group: "etnia"
    })
};

module.exports = { createUserBb, getUserBd, updateUserDb, deleteUserDb, optionsUsersDb, allUserForDb, ageism, sexoism, studyism, ethnicism }