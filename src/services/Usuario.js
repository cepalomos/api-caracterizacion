const { User, conn: sequelize } = require('../db');

const allTableUser = () => {
    return User.findAll();
}

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

const activityism = () => {
    return User.findAll({
        attributes: [
            "actividad",
            [sequelize.fn("COUNT", sequelize.col("id")), "cantidad"]
        ],
        group: "actividad"
    })
};

const salarism = () => {

    return User.findAll({
        attributes: [
            [sequelize.literal("CASE WHEN salario < 1160000 THEN 'Menos de salario minimo' WHEN salario < 2320000 THEN 'Entre 1 y 2 salarios' WHEN salario < 3480000 THEN 'entre 2 y 3 salarios' WHEN salario < 4640000 THEN 'entre 3 y 4 salarios' ELSE 'Mas de 4 salarios' END"), "rango_salario"],
            [sequelize.fn("COUNT", sequelize.col("id")), "cantidad"]
        ],
        group: "rango_salario"
    })
}
module.exports = { createUserBb, activityism, getUserBd, updateUserDb, deleteUserDb, optionsUsersDb, allUserForDb, ageism, sexoism, studyism, ethnicism, allTableUser, salarism }